import { useContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RatIcon from './RatIcon';
import RatMultiSelect from '../components/RatMultiSelect';
import RatLocales from '../contexts/RatLocales';
import { IconsByString } from '../fonts/IconsByString';

function RatGrid(props) {
  const navigate = useNavigate();
  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [gridData, setGridData] = useState([]);
  const locales = useContext(RatLocales);
  const hiddenColumns = {}, optionsData = {};

  function lowerFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  function entityRedirect(id) {
    var url = location.pathname.replace(/\/$/, "");
    navigate(url + "/" + id);
  }

  function deleteEntry(id) {
    axios.post("/entity/deleteentity", { entityName: props.entityName, id: id })
      .then(function () {
        getGridData();
      });
  }

  function getGridData() {
    axios.post("/entity/getalltotable", { entityName: props.entityName })
      .then(function (response) {
        const columnsData: GridColDef[] = [];
        
        response.data.columns.forEach(function (column) {
          var columnObject = {
            field: lowerFirstLetter(column.name),
            headerName: column.entryType != "EnumIcon" ? locales[column.name] : ""
          };

          if (columnObject.field == "id" || column.hidden)
          {
            hiddenColumns[columnObject.field] = false;
          }

          switch(column.entryType) {
            case "String": {
              columnObject["flex"] = 1;
              break;
            }
            case "Boolean": {
              columnObject["renderCell"] = ({value}) => (
                <>
                { value ? <RatIcon name="task_alt" />
                    : <RatIcon name="radio_button_unchecked" /> }
                </>
              );
              columnObject["width"] = 150;
              break;
            }
            case "DateTime": {
              columnObject["valueGetter"] = getFormattedDate;
              columnObject["flex"] = 1;
              break;
            }
            case "Enum": { 
              optionsData[columnObject.field] = column.selectOptions;
              columnObject["valueGetter"] = getEnumName;
              columnObject["flex"] = 1;
              break; 
            }
            case "EnumIcon": {
              optionsData[columnObject.field] = column.selectOptions;
              columnObject["renderCell"] = ({value}) => (
                <RatIcon class={lowerFirstLetter(optionsData[columnObject.field][value])} 
                  name={IconsByString[optionsData[columnObject.field][value]]} />
              );
              columnObject["width"] = 50;
              break;
            }
            case "MappedMultiSelect": {
              columnObject["renderCell"] = ({row}) => (
                <RatMultiSelect
                  readOnly
                  stringValues
                  value={row.userRole}
                  selectData={column.selectOptions} />
              );
              columnObject["width"] = 600;
              break;
            }
            case "ShowDetailButton": {
              columnObject["renderCell"] = ({row}) => (
                <Button variant="contained"
                  color="primary"
                  startIcon={<OpenInBrowserIcon />}
                  onClick={() => entityRedirect(row.id)}>
                  {locales.Detail}
                </Button>
              );
              columnObject["width"] = 150;
              break;
            }
            case "EditInViewButton": {
              columnObject["renderCell"] = ({row}) => (
                <Button variant="contained"
                  color="secondary"
                  startIcon={<EditIcon />}
                  disabled={row.hasOwnProperty('isSystemEntry') ? row.isSystemEntry : false}
                  onClick={() => entityRedirect(row.id)}>
                  {locales.Edit}
                </Button>
              );
              columnObject["width"] = 150;
              break;
            }
            case "DeleteButton": {
              columnObject["renderCell"] = ({row}) => (
                <Button variant="contained"
                  color="error"
                  startIcon={<DeleteIcon />}
                  disabled={row.hasOwnProperty('isSystemEntry') ? row.isSystemEntry : false}
                  onClick={() => deleteEntry(row.id)}>
                  {locales.Delete}
                </Button>
              );
              columnObject["width"] = 150;
              break;
            }
            default: {
              break; 
            }
          }

          if (column.width > 0) {
            columnObject["width"] = column.width;
          }

          if (column.flex > 0) {
            columnObject["flex"] = column.flex;
          }

          columnsData.push(columnObject);
        });

        setColumns(columnsData);
        setGridData(response.data.data);
    });
  }

  function getFormattedDate(params: GridValueGetterParams) {
    const date = new Date(params.value);
    return date.toLocaleString('en-us');
  }

  function getEnumName(params: GridValueGetterParams) {
    return optionsData[params.field][params.value];
  }

  useEffect(() => {
      getGridData();
  }, [])

  return (
      <DataGrid
          sx={{ width: '100%', height: 500, margin: '10px 0 0' }}
          getRowHeight={() => 'auto'}
          rows={gridData}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
          initialState= {{
            columns: {
              columnVisibilityModel: hiddenColumns
            }
          }}
      />
  );
}

export default RatGrid;

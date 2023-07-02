import { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

function RatMultiSelect(props) {
    const [selectedOptionValues, setSelectedOptionValues] = useState([]);
    const [allOptionValues, setAllOptionValues] = useState([]);

    function onChange(e, value) {
        setSelectedOptionValues(value);

        var ids = value.map(function(x) {
            return x.id;
        });

        props.callback({
            name: props.name, 
            value: ids
        });
    }

    useEffect(() => {
        var allOptions = [], selectedOptions = [];

        for (var key in props.selectData) {
            var id = props.stringValues ? props.selectData[key] : parseInt(key);
            var option = { id: id, name: props.selectData[key] };
            allOptions.push(option);

            if (props.value.includes(id)) {
                selectedOptions.push(option);
            }
        }

        setAllOptionValues(allOptions);
        setSelectedOptionValues(selectedOptions);
    }, [])

    return (
        <FormControl fullWidth>
            <Autocomplete
                multiple
                readOnly={props.readOnly}
                disableClearable={props.readOnly}
                forcePopupIcon={!props.readOnly}
                options={allOptionValues}
                value={selectedOptionValues}
                getOptionLabel={(option) => option.name}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => (
                    <TextField
                        {...params }
                        label={props.label}
                    />
                )}
                onChange={onChange}
            />
        </FormControl>
    );
}

export default RatMultiSelect;

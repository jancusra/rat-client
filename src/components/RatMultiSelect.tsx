import { useEffect, useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { SelectOption } from '../models';

function RatMultiSelect(props) {
    const [selectedOptionValues, setSelectedOptionValues] = useState<SelectOption[]>([]);
    const [allOptionValues, setAllOptionValues] = useState<SelectOption[]>([]);

    function onChange(e, value) {
        setSelectedOptionValues(value);

        let ids = value.map(function(x) {
            return x.id;
        });

        props.callback({
            name: props.name, 
            value: ids
        });
    }

    useEffect(() => {
        let allOptions: Array<SelectOption> = [];
        let selectedOptions: Array<SelectOption> = [];

        for (let key in props.selectData) {
            let id = props.stringValues ? props.selectData[key] : parseInt(key);
            let option: SelectOption = { id: id, name: props.selectData[key] };
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

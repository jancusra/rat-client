import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

function RatCheckbox(props) {
    function onChange(e) {
        props.callback({
            name: e.target.name, 
            value: e.target.checked 
        });
    }

    return (
        <FormControlLabel 
            control={
                <Checkbox
                    name={props.name}
                    checked={props.value}
                    onChange={onChange} />
            } label={props.label} />
    );
}

export default RatCheckbox;

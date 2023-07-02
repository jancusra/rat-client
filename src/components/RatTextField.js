import TextField from '@mui/material/TextField';

function RatTextField(props) {
    function onChange(e) {
        props.callback({
            name: e.target.name, 
            value: e.target.value 
        });
    }

    return (
        <TextField
            className="form-input"
            variant="outlined"
            name={props.name}
            label={props.label}
            placeholder={props.label}
            value={props.value}
            error={props.error}
            helperText={props.errorMessage}
            onChange={onChange} />
    );
}

export default RatTextField;

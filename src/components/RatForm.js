import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import RatLocales from 'ratContexts/RatLocales';
import { GetCurrentLanguageId } from 'ratRoot/Utils';

function RatForm(props) {
    const [commonMessage, setMessage] = useState("");
    const locales = useContext(RatLocales);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        var reducedFormData = {};

        if (props.entityName)
        {
            props.formData.forEach(function (formEntry) {
                reducedFormData[formEntry.name] = formEntry.value;
            });
        }

        var data = props.entityName 
            ? { entityName: props.entityName, data: reducedFormData, languageId: GetCurrentLanguageId() } 
            : props.formData;

        axios.post(props.apiSource, data)
            .then(function (result) {
                if (result.data.errors) {
                    props.formErrors(result.data.errors);
                } else {
                    props.formSubmit();
                }
            })
            .catch(function (error) {
                setMessage(error.response.data.ResultReason);
            });
    }

    function handleCancel() {
        navigate(-1);
    }

    return (
        <form className={`rat-form-box ${props.class ? props.class : ""}`} onSubmit={handleSubmit}>
            {props.children}
            <div className="form-final-buttons">
                <Button
                    type="submit" 
                    variant="contained">
                        {props.buttonContent}
                </Button>
                {props.showCancelButton ?
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleCancel()}>
                            {locales.Cancel}
                    </Button>
                    : null}
            </div>
            {commonMessage ? 
                <Alert 
                    className="rat-form-alert"
                    severity="error">
                        {commonMessage}
                </Alert> 
                : null}
        </form>
    );
}

export default RatForm;

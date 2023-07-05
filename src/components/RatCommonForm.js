import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RatForm from 'ratComponents/RatForm';
import RatCheckbox from 'ratComponents/RatCheckbox';
import RatMultiSelect from 'ratComponents/RatMultiSelect';
import RatSelect from 'ratComponents/RatSelect';
import RatTextField from 'ratComponents/RatTextField';
import RatLocales from 'ratContexts/RatLocales';

function RatCommonForm(props) {
    const [formData, setFormData] = useState([]);
    const [validationData, setValidationData] = useState({});
    const locales = useContext(RatLocales);
    const navigate = useNavigate();

    function getFormData() {
        axios.post("/entity/getentity/", { id: props.entityId, entityName: props.entityName })
          .then(function (response) {
            setFormData(response.data);

            response.data.forEach(function (entry) {
                validationData[entry.name] = { error: false, message: '' };
            });
        });
    }

    function updateField(data) {
        const newState = formData.map(obj => {
            if (data.name == obj.name) {
                return { ...obj, value: data.value };
            }
            return obj;
        });
      
        setFormData(newState);
    }

    function formErrors(errors) {
        errors.forEach(function (error) {
            setValidationData({
                ...validationData,
                [error.fieldName]: { error: true, message: error.message }
            });
        });
    }

    function formSubmit() {
        if (props.submitUrl) {
            navigate(props.submitUrl);
        } else {
            navigate(-1);
        }
    }

    useEffect(() => {
        getFormData();
    }, [])

    return (
        <RatForm
            class="rat-common-form"
            apiSource="/entity/saveentity"
            entityName={props.entityName}
            buttonContent={locales.Save}
            showCancelButton={true}
            formData={formData}
            formErrors={formErrors}
            formSubmit={formSubmit}>
            {formData.map((formEntry) => {
                return (
                    {
                        'Boolean': <RatCheckbox
                            key={formEntry.name}
                            name={formEntry.name}
                            label={locales[formEntry.name]}
                            value={formEntry.value}
                            callback={updateField} />,
                        'String': <RatTextField
                            key={formEntry.name}
                            name={formEntry.name}
                            label={locales[formEntry.name]}
                            value={formEntry.value == null ? '' : formEntry.value}
                            error={validationData[formEntry.name].error}
                            errorMessage={validationData[formEntry.name].message}
                            callback={updateField} />,
                        'Enum': <RatSelect
                            key={formEntry.name}
                            name={formEntry.name}
                            label={locales[formEntry.name]}
                            value={formEntry.value}
                            selectData={formEntry.selectOptions}
                            callback={updateField} />,
                        'MappedMultiSelect': <RatMultiSelect
                            key={formEntry.name}
                            name={formEntry.name}
                            label={locales[formEntry.name]}
                            value={formEntry.value}
                            selectData={formEntry.selectOptions}
                            callback={updateField} />
                    } [formEntry.entryType]
                );
            })}
        </RatForm>
    );
}

export default RatCommonForm;

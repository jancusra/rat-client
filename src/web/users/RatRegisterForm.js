import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RatForm from 'ratComponents/RatForm';
import RatTextField from 'ratComponents/RatTextField';
import RatUser from 'ratContexts/RatUser';
import RatLocales from 'ratContexts/RatLocales';

function RatRegisterForm() {
    const [formData, setState] = useState({});
    const user = useContext(RatUser);
    const locales = useContext(RatLocales);
    const navigate = useNavigate();

    function updateField(data) {
        setState({
            ...formData,
            [data.name]: data.value
        });
    }

    function formSubmit() {
        user.getUserData();
        navigate("/");
    }

    return (
        <RatForm
            class="rat-register-box"
            apiSource="/user/register"
            buttonContent={locales.Register}
            showBackButton={true}
            formData={formData}
            formSubmit={formSubmit}>
            <RatTextField
                name="email"
                label={locales.Email}
                callback={updateField} />
            <RatTextField
                name="password"
                label={locales.Password}
                callback={updateField} />
            <RatTextField
                name="passwordVerify"
                label={locales.PasswordVerify}
                callback={updateField} />
        </RatForm>
    );
}

export default RatRegisterForm;

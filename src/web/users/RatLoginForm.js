import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RatForm from 'ratComponents/RatForm';
import RatTextField from 'ratComponents/RatTextField';
import RatUser from 'ratContexts/RatUser';
import RatLocales from 'ratContexts/RatLocales';

function RatLoginForm() {
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
            class="rat-login-box"
            apiSource="/auth/authenticate"
            buttonContent={locales.Login}
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
        </RatForm>
    );
}

export default RatLoginForm;

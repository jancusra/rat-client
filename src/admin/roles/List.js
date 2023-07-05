import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import RatGrid from 'ratComponents/RatGrid';
import RatLocales from 'ratContexts/RatLocales';

function Roles() {
    const navigate = useNavigate();
    const locales = useContext(RatLocales);

    return (
        <>
            <Button variant="contained"
                color="success"
                onClick={() => {
                    navigate("./0");
                  }}>{locales.CreateNew}</Button>
            <RatGrid entityName="UserRole" />
        </>
    );
}

export default Roles;

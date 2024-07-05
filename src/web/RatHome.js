import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import RatLocales from '../contexts/RatLocales';
import ratImage from 'ratImages/rat';

function RatHome() {
    const navigate = useNavigate();
    const locales = useContext(RatLocales);

    return <div className="action-buttons">
                <img src={ratImage} className="rat-image" alt="image" />
                <Button variant="contained" onClick={() => {navigate("/login");}}>
                    {locales.Login}
                </Button>
                <Button variant="outlined" onClick={() => {navigate("/register");}}>
                    {locales.Register}
                </Button>
            </div>
}

export default RatHome;

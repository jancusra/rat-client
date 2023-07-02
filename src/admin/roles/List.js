import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import RatGrid from 'ratComponents/RatGrid';

function Roles() {
    const navigate = useNavigate();

    return (
        <>
            <Button variant="contained"
                color="success"
                onClick={() => {
                    navigate("./0");
                  }}>Create new</Button>
            <RatGrid entityName="UserRole" />
        </>
    );
}

export default Roles;

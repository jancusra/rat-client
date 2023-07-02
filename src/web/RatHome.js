import { useNavigate } from 'react-router-dom';

function RatHome() {
    const navigate = useNavigate();

    return <div>
                <button onClick={() => {navigate("/login");}}>Go to login</button>
                <br/>
                <button onClick={() => {navigate("/register");}}>Go to register</button>
            </div>
}

export default RatHome;

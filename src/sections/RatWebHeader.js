import { useContext } from 'react';
import axios from 'axios';
import RatUser from 'ratContexts/RatUser';
import RatLocales from 'ratContexts/RatLocales';

function RatWebHeader() {
    const user = useContext(RatUser);
    const locales = useContext(RatLocales);

    function logout() {
        axios.post("/auth/logout")
            .then(function () {
                location.href = "/";
            });
      }

    return (
        <div className="rat-web-header">
            {user.data.email ?
                <>
                    <div className="logged-user" onClick={() => {location.href = "/"}}>
                        {user.data.email}
                    </div>
                    <div className="logout-user" onClick={logout}>
                        Logout
                    </div>
                </>
            : null}
            {user.data.isAdmin ?
                <div className="admin-link" onClick={() => {location.href = "/admin"}}>
                    {locales.Administration}
                </div>
            : null}
        </div>
    );
}

export default RatWebHeader;

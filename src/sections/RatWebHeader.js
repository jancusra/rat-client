import { useContext } from 'react';
import axios from 'axios';
import RatUser from 'ratContexts/RatUser';
import RatLocales from 'ratContexts/RatLocales';
import RatIcon from 'ratComponents/RatIcon';
import { IsAdminLayout, ChangeStorageItemBoolState } from 'ratRoot/Utils';

function RatWebHeader() {
    const user = useContext(RatUser);
    const locales = useContext(RatLocales);

    function changeAdminMenu() {
        ChangeStorageItemBoolState("hiddenAdminMenu");
        window.location.reload();        
    }

    function setLanguage(id) {
        localStorage.setItem("languageId", id);
        window.location.reload();
    }

    function logout() {
        axios.post("/auth/logout")
            .then(function () {
                location.href = "/";
            });
    }

    return (
        <div className="rat-web-header">
            {IsAdminLayout() ?
                <div className="admin-menu-icon" onClick={changeAdminMenu}>
                    <RatIcon name="menu" />
                </div>
                : null}
            {user.data.email ?
                <>
                    <div className="logged-user" onClick={() => {location.href = "/"}}>
                        {user.data.email}
                    </div>
                    <div className="logout-user" onClick={logout}>
                        {locales.Logout}
                    </div>
                </>
            : null}
            {user.data.isAdmin ?
                <div className="admin-link" onClick={() => {location.href = "/admin"}}>
                    {locales.Administration}
                </div>
            : null}
            {Array.isArray(user.data.languages) && user.data.languages.length > 1 ?
                <div className="language-panel">
                    {user.data.languages.map((language) =>
                        <img key={language.name} className="language-image" 
                            src={require("./../images/flags/" + language.twoLetterCode + ".svg")}
                            alt={language.name}
                            onClick={() => setLanguage(language.id)}></img>
                    )}
                </div>
            : null}
        </div>
    );
}

export default RatWebHeader;

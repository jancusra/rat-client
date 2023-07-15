import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import RatAdminRoutes from './admin/RatAdminRoutes';
import RatWebRoutes from './web/RatWebRoutes';
import RatUser from 'ratContexts/RatUser';
import RatLocales from 'ratContexts/RatLocales';
import RatWebHeader from 'ratSections/RatWebHeader';
import { IsAdminLayout, GetCurrentLanguageId } from 'ratRoot/Utils';

axios.defaults.baseURL = "http://localhost:47050/api";

function RatApp() {
    const [userData, setUserData] = useState({});
    const [locales, setLocales] = useState({});

    function getUserData() {
        axios.get("/user/getCurrentUserData")
            .then(function (response) {
                setUserData(response.data);
            });
    }

    function getLocales() {
        axios.get("/localization/getByLanguageId?languageId=" + GetCurrentLanguageId())
            .then(function (response) {
                setLocales(response.data);
            });
    }

    const userContext = {
        data: userData,
        getUserData
    }

    useEffect(() => {
        getUserData();
        getLocales();
    }, [])

    return (
        <RatUser.Provider value={userContext}>
            <RatLocales.Provider value={locales}>
                <BrowserRouter>
                    <RatWebHeader/>
                    <Suspense fallback={<div>Loading...</div>}>
                    { IsAdminLayout() ? <RatAdminRoutes/> : <RatWebRoutes/> }
                    </Suspense>
                </BrowserRouter>
            </RatLocales.Provider>
        </RatUser.Provider>
    );
  }

  export default RatApp;

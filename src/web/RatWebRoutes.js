import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RatPluginRoutes from 'ratPlugins/RatPluginRoutes';

const Home = React.lazy(() => import('ratWeb/RatHome'));
const Installing = React.lazy(() => import('ratWeb/init/RatInstalling'));
const Login = React.lazy(() => import('ratWeb/users/RatLoginForm'));
const Register = React.lazy(() => import('ratWeb/users/RatRegisterForm'));
const NotFound = React.lazy(() => import('ratWeb/NotFound'));

function RatWebRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/installing" element={<Installing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {RatPluginRoutes}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
  }

  export default RatWebRoutes;

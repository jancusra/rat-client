import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Admin = React.lazy(() => import('ratAdmin/index'));
const Users = React.lazy(() => import('ratAdmin/users/List'));
const UsersCE = React.lazy(() => import('ratAdmin/users/CreateEdit'));
const Roles = React.lazy(() => import('ratAdmin/roles/List'));
const RolesCE = React.lazy(() => import('ratAdmin/roles/CreateEdit'));
const NotFound = React.lazy(() => import('ratWeb/NotFound'));

function RatAdminRoutes() {
    return (
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/*" element={<Admin />}>
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UsersCE />} />
          <Route path="roles" element={<Roles />} />
          <Route path="roles/:id" element={<RolesCE />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    );
  }

  export default RatAdminRoutes;

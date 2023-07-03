import { Outlet } from 'react-router-dom';
import RatTreeMenu from 'ratComponents/RatTreeMenu';
import 'ratStyles/admin';

function RatAdminLayout() {
    return (
        <>
            <div className="admin-menu">
                <RatTreeMenu apiSource="/menu/getmenu" />
            </div>
            <div className="admin-content">
                <Outlet />
            </div>
        </>
    );
}

export default RatAdminLayout;

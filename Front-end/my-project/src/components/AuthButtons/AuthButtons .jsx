import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

const AuthButtons = () => {
    return (
        <div className="flex space-x-4 p-4">
            <NavLink to="/login">
                <Button type="danger" className="bg-red-600 hover:bg-red-700 border border-t-slate-50 text-white">
                    Login
                </Button>
            </NavLink>
            <NavLink to="/register">
                <Button type="danger" className="bg-red-600 hover:bg-red-700 border-t-stone-50 text-white border">
                    Register
                </Button>
            </NavLink>
        </div>
    );
}

export default AuthButtons;

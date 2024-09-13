import { Link } from 'react-router-dom';

import { UserOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import 'antd/dist/reset.css';


import Logo from '../../assets/img/logo.png'

const HeaderTop = ({ isOpen, toggleMenu }) => {


    return (
        <div className="flex justify-between items-center mt-2 px-2 max-w-7xl m-auto">
            <div className="flex justify-between gap-5 items-center">
                <Link to="/">
                    <img src={Logo} alt="" />
                </Link>
                <div className="bg-neutral-100 rounded-xl min-w-9 p-2  flex items-center gap-3  ">
                    <SearchOutlined className="mt-1" />
                    <input type="text" className="bg-transparent outline-none" aria-label="Enter your name" placeholder="Search..." />
                </div>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
                <Tooltip title="User">
                    <UserOutlined style={{ fontSize: '24px' }} />
                </Tooltip>
                <Tooltip title="Shopping Cart">
                    <ShoppingCartOutlined style={{ fontSize: '24px' }} />
                </Tooltip>
                <button
                    onClick={toggleMenu}
                    className="text-stone-600 focus:outline-none block md:hidden"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                        />
                    </svg>
                </button>



            </div>

        </div>


    )
}

export default HeaderTop
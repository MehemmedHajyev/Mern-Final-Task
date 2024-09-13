import { NavLink } from "react-router-dom";
import AuthButtons from "../AuthButtons/AuthButtons ";

const Nav = ({ isOpen, setIsOpen }) => {
    return (
        <div
            className={`bg-red-600 fixed top-0 left-0 h-full  m-auto ${isOpen ? "w-64" : "w-0"} overflow-hidden transition-all duration-300 ease-in-out z-50`}
        >
            <div className="flex items-center justify-between p-4">
                <div className="text-white text-xl font-bold">
                    <span>Hajyeff</span>
                </div>
            </div>

            <nav className="text-white flex flex-col h-full p-4 xl:max-w-7xl m-auto">
                <ul className="flex flex-col gap-4">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `relative px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-white after-underline after-underline-active" : "text-gray-300 after-underline"}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                `relative px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-white after-underline after-underline-active" : "text-gray-300 after-underline"}`
                            }
                        >
                            Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/faq"
                            className={({ isActive }) =>
                                `relative px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-white after-underline after-underline-active" : "text-gray-300 after-underline"}`
                            }
                        >
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `relative px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-white after-underline after-underline-active" : "text-gray-300 after-underline"}`
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                `relative px-3 py-2 rounded-md text-sm font-medium ${isActive ? "text-white after-underline after-underline-active" : "text-gray-300 after-underline"}`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                </ul>

                {/* Desktop görünüm için ekstra stil ekleyebilirsiniz */}
                <div className="mt-auto hidden lg:flex lg:items-end lg:justify-center"> {/* sadece büyük ekranlarda göster */}
                    <AuthButtons />
                </div>
            </nav>
        </div>
    );
};

export default Nav;

import { NavLink } from "react-router-dom";
import AuthButtons from "../AuthButtons/AuthButtons ";

const Nav = () => {
    return (
        <nav className="bg-red-600 text-white p-4">
            <ul className="flex space-x-4">
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
                <li>
                    <AuthButtons />
                </li>
            </ul>

        </nav>
    );
}

export default Nav;

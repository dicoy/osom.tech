import React from "react";
import { Nav, NavLink, NavMenu } from "../atoms/NavBarElements";
 
const Navbar = () => {
    return (
        <Nav>
            <NavMenu>
                <NavLink to="/">
                    Home
                </NavLink>
                <NavLink to="/products">
                    Products
                </NavLink>
            </NavMenu>
        </Nav>
    );
};
 
export default Navbar;
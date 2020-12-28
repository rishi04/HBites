import React from 'react'
import {Nav, NavIcon, NavLink, Pizza} from './NavbarElements';

const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
         <NavLink to='/'> Pizza</NavLink>
         <NavIcon onClick={toggle}>
        <p> Menu </p>
        <Pizza />
         </NavIcon>
        </Nav>
        </>
    );
};

export default Navbar;

import React from 'react';
import { NavLink } from "react-router-dom";


// Here destructuring the props object to linkTo and linkName

function CustomNavLink({linkTo, linkName}) {
    return (
        <div>
            <NavLink to={linkTo} className={({ isActive }) => isActive ? "active" : "" }>{linkName}</NavLink>
        </div>
    );
}

export default CustomNavLink;
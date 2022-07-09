import React from 'react';
import { Link } from "react-router-dom";
import { StyleButton } from './StyleButton';



export default function Button({to, name, variant}) {
    return (
        <StyleButton className={variant}>
            <Link to={to}>{name} </Link>
        </StyleButton>
    );
}



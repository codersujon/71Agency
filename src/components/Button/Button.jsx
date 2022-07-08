import React from 'react';
import { Link } from "react-router-dom";
import StyleButton from './StyleButton';



export default function Button({to, name}) {
    return (
        <StyleButton>
            <Link to={to}>{name}</Link>
        </StyleButton>
    );
}



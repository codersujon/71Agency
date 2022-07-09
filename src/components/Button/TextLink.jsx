import React from 'react';
import { Link } from "react-router-dom";

function TextLink(props) {
    const {to, name} = props;
    return (
        <Link to={to}>{name}</Link>
    );
}

export default TextLink;
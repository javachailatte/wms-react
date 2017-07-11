import React from 'react';
import {Link} from 'react-router-dom';
import Button from "./Button";

const LinkButton = props => {
    const { to, ...otherProps } = props;

    return (
        <Link to={to}>
            <Button { ...otherProps } />
        </Link>
    );

};

export default LinkButton;
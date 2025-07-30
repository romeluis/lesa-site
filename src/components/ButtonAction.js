import React from 'react';
import './ButtonLink.css';

const ButtonAction = ({ text, onClick, className, color }) => {
    return (
        <button className={`button-link ${color} ${className}`} onClick={onClick}>
            <p>{text}</p>
        </button>
    );
};

export default ButtonAction;

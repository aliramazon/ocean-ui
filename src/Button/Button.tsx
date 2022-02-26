import React, { FC } from 'react';
import { ButtonProps } from './ButtonProps';

const Button: FC<ButtonProps> = ({ size, label }) => {
    return <button>{label}</button>;
};

export default Button;

import React, { FC } from 'react';

export interface ButtonProps {
    size?: 'large' | 'medium' | 'small';
    label: string;
}

const Button: FC<ButtonProps> = ({ size, label }) => {
    return <button>{label}</button>;
};

export default Button;

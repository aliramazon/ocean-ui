import React, { FC } from 'react';
import { InputProps } from './InputProps';

const Input: FC<InputProps> = ({ onChange, value }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default Input;

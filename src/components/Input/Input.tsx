import React, { FC } from 'react';
import { InputProps } from './InputProps';
import styles from './Input.module.scss';

const Input: FC<InputProps> = ({ onChange, value }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={styles.test}
        />
    );
};

export default Input;

import React, { FC } from 'react';
import { ButtonProps } from './ButtonProps';
import styles from './Button.module.scss';

const Button: FC<ButtonProps> = ({ size, label }) => {
    return <button className={styles.button}>{label}</button>;
};

export default Button;

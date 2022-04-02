import React, { FC } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';
import { ButtonProps, ButtonSize } from './ButtonProps';

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    outline: none;
    }

    html {
        font-size: 62.5%;
    }`;

const ButtonBase = styled.button<{ size?: ButtonSize }>`
    font-size: 20px;
    ${({ size }) =>
        size === 'large' &&
        css`
            font-size: 30px;
        `}
`;

const Button: FC<ButtonProps> = ({ size, label }) => {
    return <ButtonBase size={size}>{label}</ButtonBase>;
};

export default Button;

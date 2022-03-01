import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { ButtonProps, ButtonSize } from './ButtonProps';

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

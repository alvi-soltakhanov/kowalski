import React from 'react';
import { ButtonWrapper, StyledIcon } from './Button.styled';
import { RefreshIcon } from '../../assets/Icons/Refresh';
export const Button = ({ children, onClick, loading, disabled }: any) => (
  <ButtonWrapper onClick={onClick} loading={loading} disabled={disabled}>
    {children} {loading && <StyledIcon><RefreshIcon /></StyledIcon>}
  </ButtonWrapper>
);
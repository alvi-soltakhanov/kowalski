import styled, { css } from 'styled-components';

interface ButtonWrapperProps {
  loading?: boolean;
  disabled?: boolean;
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 17px 20px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) => (props.disabled ? '#6b1d1d' : '#d32f2f')};
  color: white;

  ${(props) =>
    props.loading &&
    css`
      opacity: 0.7;
      pointer-events: none;
    `}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const StyledIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
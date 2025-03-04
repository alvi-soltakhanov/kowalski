import React from 'react';
import { styled } from 'styled-components';

interface FlexProps {
  children: React.ReactNode;
  direction?: "row" | "column"; // Используем строки вместо boolean
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"}; // По умолчанию row
  justify-content: space-between;
  align-items: center;
`;

export const Flex: React.FC<FlexProps> = ({ children, direction = "row" }) => {
  return <StyledFlex direction={direction}>{children}</StyledFlex>;
};
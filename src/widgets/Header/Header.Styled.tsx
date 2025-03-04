import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 20px;
`;

export const ErrorBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  padding: 17px 24px;
  margin-right: 12px;
  background-color: #0f1318;
  border-radius: 4px;
`;

export const ErrorText = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 0 15px;
`;

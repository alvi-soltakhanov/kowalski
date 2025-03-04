import { StatusProps } from '@/entities';
import { styled } from 'styled-components'

export const StatusWrapper = styled.div<StatusProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 152px;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: ${(props) => {
    switch (props.status) {
      case "Ongoing":
        return "#4caf50";
      case "Finished":
        return "#d32f2f";
      case "Scheduled":
        return "#f57c00";
      default:
        return "#9e9e9e";
    }
  }};
`;
import styled from 'styled-components';

interface StyledButtonProps {
    borderColor: string;
    hoverBackgroundColor: string;
  }

export const StyledButton = styled.button<StyledButtonProps>`
  border: 2px solid;
  border-color: ${(props) => props.borderColor};
  background-color: transparent;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor};
    transform: scale(1.05);
  }
`;

export default StyledButton;
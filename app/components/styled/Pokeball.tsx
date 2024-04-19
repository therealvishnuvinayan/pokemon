import styled, { keyframes } from 'styled-components';

const bobbing = keyframes`
  0%, 100% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(5px);
  }
`;

export const PokeBall = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  border: 2px solid black;
  border-radius: 50%;
  overflow: hidden;
  background: white;
  cursor: pointer;
  animation: ${bobbing} 3s ease-in-out infinite;
  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50%;
    background-color: red;
  }
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: white;
    border: 2px solid black;
    border-radius: 50%;
  }
`;

export default PokeBall;
import styled from 'styled-components';

export const PokeBall = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  border: 2px solid black;
  border-radius: 50%;
  overflow: hidden;
  background: white;
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
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 2rem;
  color: #cc0000;
  text-align: center;
  background-image: linear-gradient(180deg, #ffffff, #ffcb05);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffcb05;
  position: relative;
  min-width: 100px;
  max-width: 300px;
  display: flex;
  justify-content: flex-start;

  &:after {
    content: "";
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    margin-left: 30px;
    background-image: url("/pokeball.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export default Heading;

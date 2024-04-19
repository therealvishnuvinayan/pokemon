import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  justify-items: center;
  align-items: center;
  padding: 16px;
  max-width: 100%;
  margin: auto;
`;

export default GridContainer
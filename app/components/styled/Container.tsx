import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-right: auto;
  margin-left: auto;
  
  @media (min-width: 640px) { 
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) { 
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1280px;
  }

  @media (min-width: 1536px) { 
    max-width: 1536px;
  }
`;

export default Container;

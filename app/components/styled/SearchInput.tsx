import styled from 'styled-components';

export const SearchInput = styled.input`
  padding: 8px 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007BFF;
  }
`;

export default SearchInput
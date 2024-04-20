import React from "react";
import SearchInput from "./styled/SearchInput";
import SearchContainer from "./styled/SearchContainer";

interface SearchbarProps {
  onSearchChange: (term: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearchChange }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search Pokémon"
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </SearchContainer>
  );
};

export default Searchbar;

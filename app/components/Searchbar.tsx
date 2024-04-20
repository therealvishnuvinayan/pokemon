import React from 'react';

interface SearchbarProps {
  onSearchChange: (term: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search Pokémon"
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default Searchbar;

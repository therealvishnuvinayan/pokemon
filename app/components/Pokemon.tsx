import React from "react";
import styled from "styled-components";
import PokeBall from "./styled/Pokeball";
import MiddleBand from "./styled/MiddleBand";
import PokeBallLabel from "./styled/PokeballLabel";

type PokemonProps = {
  item: {
    name: string;
    url: string;
  };
};

const Pokemon: React.FC<PokemonProps> = ({ item }) => {
  return (
    <PokeBall key={item.name}>
      <MiddleBand />
      <PokeBallLabel>{item.name}</PokeBallLabel>
    </PokeBall>
  );
};

export default Pokemon;

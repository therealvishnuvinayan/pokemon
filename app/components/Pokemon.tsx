import React from "react";
import styled from "styled-components";
import PokeBall from "./styled/Pokeball";
import MiddleBand from "./styled/MiddleBand";
import PokeBallLabel from "./styled/PokeballLabel";
import { useRouter } from "next/navigation";
import formatItem from "../utils/formatName";

type PokemonProps = {
  item: {
    name: string;
    url: string;
  };
};

const Pokemon: React.FC<PokemonProps> = ({ item }) => {
  const router = useRouter();

  const extractCategoryAndId = (urlString: string) => {
    const url = new URL(urlString);
    const pathSegments = url.pathname.split("/").filter(Boolean);
    const id = pathSegments.pop();
    const itemCategory = pathSegments.pop();

    return { itemCategory, id };
  };

  const handleClick = (url: string) => {
    const { itemCategory, id } = extractCategoryAndId(url);
    router.push(`/category/${itemCategory}/${id}`);
  };

  return (
    <PokeBall key={item.name} onClick={() => handleClick(item.url)}>
      <MiddleBand />
      <PokeBallLabel> {formatItem(item.name)}</PokeBallLabel>
    </PokeBall>
  );
};

export default Pokemon;

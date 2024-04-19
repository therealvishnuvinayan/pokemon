"use client";

import Pokemon from "@/app/components/Pokemon";
import Container from "@/app/components/styled/Container";
import GridContainer from "@/app/components/styled/GridContainer";
import MiddleBand from "@/app/components/styled/MiddleBand";
import PokeBall from "@/app/components/styled/Pokeball";
import PokeBallLabel from "@/app/components/styled/PokeballLabel";
import PokemonLoader from "@/app/components/styled/PokemonLoader";
import { useQuery } from "@tanstack/react-query";

type ResultItem = {
  name: string;
  url: string;
};


export default function Page({ params }: { params: { item: string } }) {
  const { item } = params;
  const apiUrl = `https://pokeapi.co/api/v2/${item}/`;
  const { data, isLoading } = useQuery({
    queryKey: [`${item}`],
    queryFn: () => fetch(apiUrl).then((resp) => resp.json()),
  });

  if (isLoading) {
    return (
      <Container>
        <PokemonLoader />
      </Container>
    );
  }

  return (
    <Container>
      <GridContainer>
        {data.results.map((item: ResultItem) => (
          <Pokemon item={item} key={item.name} />
        ))}
      </GridContainer>
    </Container>
  );
}

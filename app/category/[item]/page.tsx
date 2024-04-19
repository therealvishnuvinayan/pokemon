"use client";

import Pokemon from "@/app/components/Pokemon";
import Container from "@/app/components/styled/Container";
import PokemonLoader from "@/app/components/styled/PokemonLoader";

import { useQuery } from "@tanstack/react-query";

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
    data &&
    data?.results.map((item) => (
      <Container key={item.name}>
        <Pokemon item={item} />
      </Container>
    ))
  );
}

"use client";

import Layout from "@/app/components/Layout";
import Pokemon from "@/app/components/Pokemon";
import Container from "@/app/components/styled/Container";
import GridContainer from "@/app/components/styled/GridContainer";
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
      <Layout>
      <GridContainer>
        {data.results.map((item: ResultItem) => (
          <Pokemon item={item} key={item.name} />
        ))}
      </GridContainer>
      </Layout>
    </Container>
  );
}

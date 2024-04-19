"use client";

import { useQuery } from "@tanstack/react-query";

export default function Page({ params }: { params: { item: string } }) {
  const { item } = params;
  const apiUrl = `https://pokeapi.co/api/v2/${item}/`;
  const { data, isLoading } = useQuery({
    queryKey: [`${item}`],
    queryFn: () => fetch(apiUrl).then((resp) => resp.json()),
  });

  return (
    data &&
    data?.results.map((item, index) => (
       <p key={index}>{item.name}</p>
    ))
    
  );
}

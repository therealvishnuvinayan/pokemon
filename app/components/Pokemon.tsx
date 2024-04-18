'use client'

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useRouter } from "next/navigation";

const Pokemon = () => {
  const router = useRouter();
  const apiUrl = "https://pokeapi.co/api/v2";

  const { data } = useQuery({
    queryKey: ["all-pokemons"],
    queryFn: () => fetch(apiUrl).then((res) => res.json()),
  });

  const handleClick = (item) => {
  };

  return (
    <div>
      {data &&
        Object.keys(data).map((item) => (
          <p onClick={() => handleClick(item)} key={item}>
            {item}
          </p>
        ))}
    </div>
  );
};

export default Pokemon;

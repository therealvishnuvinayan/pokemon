"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useRouter } from "next/navigation";
import Container from "./styled/Container";
import styled from "styled-components";
import StyledButton from "./styled/Button";

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

function formatItem(item: string): string {
    return item
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
      .join(' ');
  }

const Pokemon = () => {
  const router = useRouter();
  const apiUrl = "https://pokeapi.co/api/v2";

  const { data } = useQuery({
    queryKey: ["all-pokemons"],
    queryFn: () => fetch(apiUrl).then((res) => res.json()),
  });

  const handleClick = (item) => {};

  // Random color generator
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Container>
      <ButtonContainer>
        {data &&
          Object.keys(data).map((item, index) => {
            const borderColor = getRandomColor();
            return (
              <StyledButton
                borderColor={borderColor}
                hoverBackgroundColor={borderColor + "20"}
                onClick={() => handleClick(item)}
                key={item}
              >
                {formatItem(item)}
              </StyledButton>
            );
          })}
      </ButtonContainer>
    </Container>
  );
};

export default Pokemon;

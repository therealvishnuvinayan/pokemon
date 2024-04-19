"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Pokemons from "./components/Pokemons";

import "@radix-ui/themes/styles.css";
import { Container, Theme } from "@radix-ui/themes";



export default function Home() {
  return (
      <Container>
        <Theme>
          <Header />
          <Pokemons />
        </Theme>
      </Container>
  );
}

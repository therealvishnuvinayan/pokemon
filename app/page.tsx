"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@radix-ui/themes/styles.css";
import { Container, Theme } from "@radix-ui/themes";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Theme>
          <Header />
          <Pokemon />
        </Theme>
      </Container>
    </QueryClientProvider>
  );
}

"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Pokemon from "./components/Pokemon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <Header />
        <Pokemon />
      </>
    </QueryClientProvider>
  );
}

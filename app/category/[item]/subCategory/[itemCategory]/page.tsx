"use client";

import ReactApexChart from "react-apexcharts";
import { useQuery } from "@tanstack/react-query";
import Container from "@/app/components/styled/Container";
import PokemonLoader from "@/app/components/styled/PokemonLoader";
import dynamic from "next/dynamic";

interface Language {
  name: string;
  url: string;
}

interface VersionGroup {
  name: string;
  url: string;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: Language;
  version_group: VersionGroup;
}

interface DataState {
  flavor_text_entries: FlavorTextEntry[];
}

interface FlavorTextsAccumulator {
  [languageName: string]: number;
}

interface ChartData {
  options: {
    chart: {
      type: 'bar';
    };
    xaxis: {
      categories: string[];
    };
  };
  series: Array<{
    name: string;
    data: number[];
  }>;
}

export default function Page({
  params,
}: {
  params: { item: string; itemCategory: string };
}) {
  const apiUrl = `https://pokeapi.co/api/v2/${params.itemCategory}/${params.item}`;
  let chartData: ChartData | undefined;

  const { data, isLoading } = useQuery<DataState, Error>({
    queryKey: ["pokemon-detail"],
    queryFn: () => fetch(apiUrl).then((res) => res.json()),
  });

  const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
  });

  if (isLoading || !data) {
    return (
      <Container>
        <PokemonLoader />
      </Container>
    );
  }

  const flavorTextsPerLanguage: FlavorTextsAccumulator =
    data?.flavor_text_entries?.reduce(
      (acc: FlavorTextsAccumulator, entry: FlavorTextEntry) => {
        const language = entry.language.name;
        acc[language] = (acc[language] || 0) + 1;
        return acc;
      },
      {} as FlavorTextsAccumulator
    );

  chartData = {
    options: {
      chart: {
        type: "bar" as const,
      },
      xaxis: {
        categories: Object.keys(flavorTextsPerLanguage),
      },
    },
    series: [
      {
        name: "Number of Texts",
        data: Object.values(flavorTextsPerLanguage),
      },
    ],
  };

  return (
    <Container>
      <h1>{`Details for ${params.itemCategory}: ${params.item}`}</h1>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </Container>
  );
}

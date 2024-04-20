"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import Container from "@/app/components/styled/Container";
import PokemonLoader from "@/app/components/styled/PokemonLoader";
import dynamic from "next/dynamic";
import processData from "@/app/utils/processData";
import Layout from "@/app/components/Layout";
import Heading from "@/app/components/styled/Heading";
import formatItem from "@/app/utils/formatName";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface Params {
  item: string;
  itemCategory: string;
}

interface DataState {
  [key: string]: any;
}

type ChartType = "bar" | "line" | "area" | "pie" | "donut" | "scatter";

interface ChartData {
  options: {
    chart: {
      type: ChartType;
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

const CategoryDetailPage: React.FC<{ params: Params }> = ({ params }) => {
  const { item, itemCategory } = params;

  const apiUrl = `https://pokeapi.co/api/v2/${item}/${itemCategory}`;

  const { data, isLoading, error } = useQuery<DataState, Error>({
    queryKey: ["pokemon-detail"],
    queryFn: () => fetch(apiUrl).then((res) => res.json()),
  });

  if (isLoading) {
    return (
      <Container>
        <PokemonLoader />
      </Container>
    );
  }

  if (error) {
    return <Container>Error: {error.message}</Container>;
  }

  if (!data) {
    return <Container>No data available</Container>;
  }

  const chartData: ChartData | undefined = processData(data);

  return (
    <Container>
      <Layout>
        <Heading>{`${formatItem(item)}`}</Heading>
        {chartData && (
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            height={350}
          />
        )}
      </Layout>
    </Container>
  );
};

export default CategoryDetailPage;

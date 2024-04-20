interface Data {
  [key: string]: any;
}

interface ChartData {
  options: {
    chart: {
      type: "bar";
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

const processData = (data: Data): ChartData | undefined => {
  const counts: { [key: string]: number } = {};

  const findDataAndCount = (value: any, isNested = false) => {
    if (Array.isArray(value)) {
      value.forEach((item) => {
        if (item.language && item.language.name) {
          const label = item.language.name;
          counts[label] = (counts[label] || 0) + 1;
        } else if (item.name && typeof item.name === "string" && !item.url) {
          const label = item.name;
          counts[label] = (counts[label] || 0) + 1;
        } else if (item.pokemon_species && item.pokemon_species.name) {
          const label = item.pokemon_species.name;
          counts[label] = (counts[label] || 0) + 1;
        } else if (item.encounter_method && item.encounter_method.name) {
          const label = item.encounter_method.name;
          counts[label] = (counts[label] || 0) + 1;
        } else if (!isNested && typeof item === "object") {
          findDataAndCount(item, true);
        }
      });
    }
  };

  Object.values(data).forEach((value) => findDataAndCount(value));

  if (Object.keys(counts).length > 0) {
    return {
      options: {
        chart: {
          type: "bar",
        },
        xaxis: {
          categories: Object.keys(counts),
        },
      },
      series: [
        {
          name: "Count",
          data: Object.values(counts),
        },
      ],
    };
  }
};

export default processData;

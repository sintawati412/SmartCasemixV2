import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

export default function StatisticsChart({

  icd10,

  icd9,

  ba,

  favorit,

}) {

  const data = {

    labels: [

      "ICD-10",

      "ICD-9",

      "BA",

      "Favorit",

    ],

    datasets: [

      {

        data: [

          icd10,

          icd9,

          ba,

          favorit,

        ],

      },

    ],

  };

  return (

    <div
      style={{
        width: 450,
        marginTop: 40,
      }}
    >

      <Pie data={data} />

    </div>

  );

}
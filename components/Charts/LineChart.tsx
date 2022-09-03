import ApexCharts from "apexcharts";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function LineChart() {
  const [data0, setData0] = useState([
    31, 40, 28, 51, 42, 109, 100, 124, 94, 84, 26,
  ]);
  const [data1, setData1] = useState([
    11, 32, 45, 32, 34, 52, 41, 54, 62, 94, 13,
  ]);
  useEffect(() => {
    const interval = setInterval(() => {
      const dat = [];
      const bat = [];
      for (let i = 0; i < 11; i++) {
        dat.push(Math.floor(Math.random() * 100));
        bat.push(Math.floor(Math.random() * 100));
      }
      setData0(dat);
      setData1(bat);
    }, 10000);
  }, []);
  const series = [
    {
      name: "BTC",
      data: data0,
    },
    {
      name: "ETH",
      data: data1,
    },
  ];
  const options: any = {
    dataLabels: {
      enabled: false,
    },
    colors: ["#f00", "#9c27b0"],
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
      ],
    },
  };

  return (
    <div className="bg-white dark:bg-kaniDk pt-4 pr-4 mb-4 rounded-xl">
      {typeof window !== undefined && (
        <Chart height={300} type="area" series={series} options={options} />
      )}
    </div>
  );
}

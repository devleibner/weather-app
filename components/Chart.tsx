"use client";

import { getWeekDay } from "@/utils/get-week-day";
import ReactECharts from "echarts-for-react";

export default function Chart({
  daily,
}: {
  location: string;
  daily: { [k: string]: string[] & number[] };
}) {
  const days = daily.time.map((_, i) => getWeekDay(daily.time[i]));

  const option = {
    tooltip: {},
    legend: {
      data: ["rain sum", "min temperature", "max temperature"],
    },
    xAxis: {
      data: days,
    },
    yAxis: [
      {
        type: "value",
        scale: true,
        name: "[°C]",
      },
      {
        type: "value",
        scale: true,
        name: "[mm]",
      },
    ],
    series: [
      {
        name: "min temperature",
        type: "line",
        data: daily.temperature_2m_min,
        color: "maroon",
      },
      {
        name: "max temperature",
        type: "line",
        data: daily.temperature_2m_max,
        color: "blue",
      },
      {
        name: "rain sum",
        type: "bar",
        data: daily.rain_sum,
        color: "orange",
        yAxisIndex: 1,
      },
    ],
  };

  return <ReactECharts option={option} />;
}

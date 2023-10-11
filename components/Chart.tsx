"use client";

import { getAverage } from "@/utils/get-average";
import { getWeekDay } from "@/utils/get-week-day";
import { AllSeriesType } from "@mui/x-charts";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { ChartsXAxis } from "@mui/x-charts/ChartsXAxis";
import { ChartsYAxis } from "@mui/x-charts/ChartsYAxis";
import { LinePlot } from "@mui/x-charts/LineChart";

export default function Chart({
  daily,
}: {
  location: string;
  daily: { [k: string]: string[] & number[] };
}) {
  const days = daily.time.map((_, i) => getWeekDay(daily.time[i]));
  const averageTemperatures = daily.temperature_2m_min.map((_, i) =>
    getAverage(daily.temperature_2m_max[i] + daily.temperature_2m_min[i], 2)
  );

  const series = [
    {
      type: "line",
      yAxisKey: "temperature",
      color: "maroon",
      data: averageTemperatures,
    },
  ] as AllSeriesType[];

  return (
    <ChartContainer
      series={series}
      width={800}
      height={400}
      xAxis={[
        {
          id: "days",
          data: days,
          scaleType: "point",
          valueFormatter: (value) => value.toString(),
        },
      ]}
      yAxis={[
        {
          id: "temperature",
          scaleType: "linear",
        },
      ]}
    >
      <LinePlot />
      <ChartsXAxis label="Day" position="bottom" axisId="days" />
      <ChartsYAxis
        label="Average Temperature [°C]"
        position="left"
        axisId="temperature"
      />
    </ChartContainer>
  );
}

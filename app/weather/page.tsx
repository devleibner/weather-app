import Chart from "@/components/Chart";
import { Typography } from "@mui/material";
import { getWeatherInfo } from "../../utils/get-weather-info";
import styles from "./page.module.css";

export default async function Home({
  searchParams,
}: {
  searchParams: Record<"location" | "latitude" | "longitude", string>;
}) {
  const { location, latitude, longitude } = searchParams;
  const weather = await getWeatherInfo(latitude, longitude);

  return (
    <main className={styles.main}>
      <Typography variant={"h5"}>
        {`Weather in ${location} for the next 7 days`}
      </Typography>
      <Chart {...weather} />
    </main>
  );
}

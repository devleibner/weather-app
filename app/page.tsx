import Search from "@/components/Search";
import { Typography } from "@mui/material";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography variant="h6">
        {"Select desired location and check weather forecast next 7 days"}
      </Typography>
      <Search />
    </main>
  );
}

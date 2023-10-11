"use client";

import { useLocations } from "@/hooks/useLocations";
import { Autocomplete, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();

  const { locations, updateLocations } = useLocations();

  return (
    <Autocomplete
      disablePortal
      id="location-box"
      options={locations}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Location"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateLocations(e)
          }
        />
      )}
      getOptionLabel={(option) => `${option.name}, ${option.country}`}
      onChange={(_, value) => {
        if (value !== null) {
          router.push(
            `/weather?location=${value.name + "," + value.country}&latitude=${
              value.lat
            }&longitude=${value.lng}`
          );
        }
      }}
    />
  );
}

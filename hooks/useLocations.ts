import { Location } from "@/models/location";
import { getLocations } from "@/utils/get-locations";
import { useState } from "react";

export const useLocations = () => {
  const [locations, setLocations] = useState<Location[]>([]);

  const updateLocations = (e: React.ChangeEvent<HTMLInputElement>) => {
    const data = getLocations(e.target.value);
    setLocations(data);
  };

  return { locations, updateLocations };
};

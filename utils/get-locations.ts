import cities from "cities.json";

import { Location } from "@/models/location";

export const getLocations = (location: string): Location[] => {
  const result: Location[] = [];

  const citiesTyped = cities as Location[];

  citiesTyped.find(
    (item) => (
      item.name.toLowerCase().includes(location) && result.push(item),
      result.length >= 10
    )
  );

  return result;
};

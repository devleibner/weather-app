export async function getWeatherInfo(lat: string, long: string) {
  const result = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=temperature_2m_max,temperature_2m_min,rain_sum&timezone=Europe%2FBerlin`
  );

  return result.json();
}

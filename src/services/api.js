export async function getMarineWeather(lat, lon) {
    const url = `https://marine-api.open-meteo.com/v1/marine?latitude=-3.7172&longitude=-38.5431&hourly=wave_direction,wind_wave_direction,sea_surface_temperature,swell_wave_height,swell_wave_period,swell_wave_direction,wind_wave_height,sea_level_height_msl&timezone=auto`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return null;
    }
  }
  
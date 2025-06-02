

export function calcularResumoDoDia(data) {
    const { time, swell_wave_height, swell_wave_period, wave_direction, wind_wave_direction, sea_surface_temperature } = data.hourly;
  
    const indicesDoDia = time.reduce((acc, t, idx) => {
      const hora = new Date(t).getHours();
      if (hora >= 5 && hora <= 18) acc.push(idx);
      return acc;
    }, []);
  
    const media = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  
    const swellHeights = indicesDoDia.map(i => swell_wave_height[i]);
    const swellPeriods = indicesDoDia.map(i => swell_wave_period[i]);
    const waveDirections = indicesDoDia.map(i => wave_direction[i]);
    const windDirections = indicesDoDia.map(i => wind_wave_direction[i]);
    const seaTemps = indicesDoDia.map(i => sea_surface_temperature[i]);
  
    function moda(arr) {
      const freq = {};
      arr.forEach(v => freq[v] = (freq[v] || 0) + 1);
      return Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b);
    }
  
    return {
      swellHeightAvg: media(swellHeights),
      swellPeriodAvg: media(swellPeriods),
      waveDirectionModa: Number(moda(waveDirections)),
      windDirectionModa: Number(moda(windDirections)),
      seaTempAvg: media(seaTemps),
    }
  }
  
export function degreesToCardinal(degrees) {
    const directions = [
      { short: "N", full: "North" },
      { short: "NNE", full: "North-Northeast" },
      { short: "NE", full: "Northeast" },
      { short: "ENE", full: "East-Northeast" },
      { short: "E", full: "East" },
      { short: "ESE", full: "East-Southeast" },
      { short: "SE", full: "Southeast" },
      { short: "SSE", full: "South-Southeast" },
      { short: "S", full: "South" },
      { short: "SSW", full: "South-Southwest" },
      { short: "SW", full: "Southwest" },
      { short: "WSW", full: "West-Southwest" },
      { short: "W", full: "West" },
      { short: "WNW", full: "West-Northwest" },
      { short: "NW", full: "Northwest" },
      { short: "NNW", full: "North-Northwest" },
      { short: "N", full: "North" },
    ];
    const index = Math.round(degrees / 22.5);
    const dir = directions[index % 16];
    return `${dir.full} (${dir.short})`;
  }
  
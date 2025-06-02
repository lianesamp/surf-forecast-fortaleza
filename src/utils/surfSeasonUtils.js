
export function isSurgeSeason(date) {
    const month = date.getMonth() + 1; 
    return month >= 10 || month <= 4;
  }
  
  
  export function averageSwellPeriod(swellPeriods) {
    if (!Array.isArray(swellPeriods)) return null;
  
    const periodSlice = swellPeriods.slice(5, 19);
    const validPeriods = periodSlice.filter(p => typeof p === "number" && !isNaN(p));
  
    if (validPeriods.length === 0) return null;
  
    const sum = validPeriods.reduce((acc, val) => acc + val, 0);
    return sum / validPeriods.length;
  }
  
  export function isGoodSwell(swellPeriod) {
    return swellPeriod >= 10;
  }
  
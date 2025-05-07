export function convertToFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}

export const weatherCodeMap = {
  0: 'Clear Sky',
  1: 'Mainly Clear',
  2: 'Partly Cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing Rime Fog',
  51: 'Light Drizzle',
  53: 'Drizzle',
  55: 'Dense Drizzle',
  56: 'Freezing Drizzle',
  57: 'Dense Freezing Drizzle',
  61: 'Light Rain',
  63: 'Rain',
  65: 'Heavy Rain',
  66: 'Light Freezing Rain',
  67: 'Heavy Freezing Rain',
  71: 'Light Snow',
  73: 'Snow',
  75: 'Blizzard',
  77: 'Snow Grains',
  80: 'Light Rain Shower',
  81: 'Rain Shower',
  82: 'Heavy Rain Shower',
  85: 'Light Snow Shower',
  86: 'Heavy Snow Shower',
  95: 'Thunderstorm',
  96: 'Thunderstorm with Hail',
  99: 'Thunderstorm with Hail',
}

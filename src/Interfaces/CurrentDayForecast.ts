export default interface CurrentDayForecast {
  uv: number;
  wind_kmph: number;
  humidity: number;
  vis_km: number;
  aqi: number;
  sunrise: string;
  sunset: string;
  temp_c: number;
  temp_f: number;
  condition: string;
  is_day: boolean;
  chance_of_rain: number;
}

// Handle Response Type

export interface CurrentDayForecastRes {
  uv: number;
  wind_kph: number;
  humidity: number;
  vis_km: number;
  air_quality: {
    pm2_5: number;
  };
  sunrise: string;
  sunset: string;
  temp_c: number;
  temp_f: number;
  condition: {
    text: string;
  };
  is_day: boolean;
  chance_of_rain: number;
}

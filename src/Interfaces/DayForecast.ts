export default interface DayForecast {
  date: string;
  avgtemp_c: number;
  avgtemp_f: number;
  image: string;
  condition: string;
}

// Handle Response Type
export interface DayForecastRes {
  date: string;
  day: {
    avgtemp_c: number;
    avgtemp_f: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

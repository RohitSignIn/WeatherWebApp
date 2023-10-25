export default interface TodayForecast {
  time: string;
  image: string;
  condition: string;
  temp_c: number;
  temp_f: number;
}

export interface TodayForecastRes {
  time: string;
  condition: {
    icon: string;
    text: string;
  };
  temp_c: number;
  temp_f: number;
}

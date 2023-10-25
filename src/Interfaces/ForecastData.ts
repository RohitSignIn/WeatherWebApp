import CurrentDayForecast from "./CurrentDayForecast";
import DayForecast from "./DayForecast";
import TodayForecast from "./TodayForecast";
// import TodayForecast from "./TodayForecast";

export default interface ForecastData {
  location: {
    localtime: string;
    country: string;
    region: string;
    name: string;
  };
  dayForecast: DayForecast[];
  currentData: CurrentDayForecast;
  todayForecast: TodayForecast[];
}

import ForecastData from "./ForecastData";

export default interface ForecastDataState {
  status: "default" | "loading" | "success" | "failure";
  tempFormat: "celsius" | "fahrenheit";
  data: ForecastData;
}

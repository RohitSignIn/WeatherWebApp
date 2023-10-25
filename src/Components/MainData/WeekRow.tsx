import TempCard from "../TempCard";
import ReduxState from "../../Interfaces/ReduxState";
import { useSelector } from "react-redux";
function WeekRow() {
  const dayForecast = useSelector(
    (state: ReduxState) => state.forecast.data.dayForecast
  );

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const tempFormat = useSelector(
    (state: ReduxState) => state.forecast.tempFormat
  );

  return (
    <div className='overflow-x-auto px-4 pt-2 pb-4 flex gap-5'>
      {dayForecast &&
        dayForecast.map((forecast) => {
          const temperature =
            tempFormat === "celsius"
              ? Math.floor(forecast.avgtemp_c).toString() + "°C"
              : Math.floor(forecast.avgtemp_f).toString() + "°F";
          return (
            <TempCard
              title={weekdays[new Date(forecast.date).getDay()]}
              temperature={temperature}
              condition={forecast.condition}
              image={forecast.image}
              key={forecast.date}
            />
          );
        })}
    </div>
  );
}

export default WeekRow;

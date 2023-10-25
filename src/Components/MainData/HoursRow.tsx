import TempCard from "../TempCard";
import ReduxState from "../../Interfaces/ReduxState";
import { useSelector } from "react-redux";
function HoursRow() {
  const todayForecast = useSelector(
    (state: ReduxState) => state.forecast.data.todayForecast
  );

  function getUTC12hr(forCTime: string) {
    const time = new Date(forCTime).toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    });
    return time;
  }

  const tempFormat = useSelector(
    (state: ReduxState) => state.forecast.tempFormat
  );

  return (
    <div className='overflow-x-auto px-4 pt-2 pb-4 flex gap-5'>
      {todayForecast &&
        todayForecast.map((forecast) => {
          const temperature =
            tempFormat === "celsius"
              ? Math.floor(forecast.temp_c).toString() + "°C"
              : Math.floor(forecast.temp_f).toString() + "°F";
          return (
            <TempCard
              key={forecast.time}
              condition={forecast.condition}
              title={getUTC12hr(forecast.time)}
              temperature={temperature}
              image={forecast.image}
            />
          );
        })}
    </div>
  );
}

export default HoursRow;

import MainData from "../Components/MainData/MainData";
import Sidebar from "../Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { fetchData } from "../Redux/Slices/ForecastSlice";
import { useAppDispatch } from "../Hooks/hooks";
import axios from "axios";
function Home() {
  const dispatch = useAppDispatch();
  const [citySearch, setCitySearch] = useState<string>("");

  useEffect(() => {
    console.log(citySearch, "cityReq");
    if (!citySearch) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const response = await axios.get(
          `https://us1.locationiq.com/v1/reverse?key=${
            import.meta.env.VITE_LOC_API_KEY
          }&lat=${position.coords.latitude}&lon=${
            position.coords.longitude
          }&format=json`
        );
        setCitySearch(response?.data?.address?.city);
      });
    } else {
      dispatch(fetchData(citySearch));
    }
  }, [citySearch]);
  return (
    <div
      className='h-[100vh] px-8 py-8 flex flex-row justify-center items-stretch'
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/night.jpg)`,
      }}
    >
      <Sidebar setCitySearch={setCitySearch} />
      <MainData />
    </div>
  );
}

export default Home;

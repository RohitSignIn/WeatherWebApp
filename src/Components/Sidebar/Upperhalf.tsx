import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";
import GetDay from "../GetDay";

function Upperhalf({
  setCitySearch,
}: {
  setCitySearch: React.Dispatch<string>;
}) {
  const [search, setSearch] = useState("");
  const currentData = useSelector(
    (state: ReduxState) => state.forecast.data.currentData
  );

  const locationData = useSelector(
    (state: ReduxState) => state.forecast.data.location.localtime
  );

  const tempFormat = useSelector(
    (state: ReduxState) => state.forecast.tempFormat
  );

  function HandleCitySearch() {
    console.log("Search");
    setCitySearch(search);
  }

  // const [date, setDate] = useState("");

  // useEffect(() => {
  //   if(locationData)
  // }, [])

  const DateData = new Date(locationData).toLocaleString(undefined, {
    timeZone: "Asia/Kolkata",
  });
  const day = new Date(DateData).getDay();
  const time = new Date().toLocaleTimeString("en-IN", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  // const day = new Date(DateData).getDay();
  // const time = "22 : 22";

  return (
    <div className='max-h-[30rem] w-full p-4 flex flex-col justify-center items-start basis-[65%]'>
      <div className='flex flex-start w-full mt-2'>
        {/* Search bar div */}
        <input
          placeholder='Search...'
          className='px-2 rounded-tl-md rounded-bl-md block basis-[90%] bg-white text-black outline-none'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className='block basis-[10%] px-4 py-3 outline-none text-white text-lg font-semibold bg-sky-500 rounded-tr-md rounded-br-md'
          onClick={() => HandleCitySearch()}
        >
          <AiOutlineSearch />
        </button>
      </div>

      <div className='w-full h-[60%] flex justify-center mt-12'>
        {/* image container */}
        <img src={"/CloudyNight.png"} className='w-[50%]' />
      </div>

      <div className='flex flex-col mt-4'>
        {/* Tempreature data */}
        <div className='text-6xl text-black flex items-start'>
          {tempFormat == "celsius" ? (
            <>
              <div>{Math.floor(currentData.temp_c)}</div>
              <div className='text-4xl mt-1'>°C</div>
            </>
          ) : (
            <>
              <div>{Math.floor(currentData.temp_f)}</div>
              <div className='text-4xl mt-1'>°F</div>
            </>
          )}
        </div>
        <div className='text-black text-md'>
          <GetDay day={day} /> {time}
        </div>
      </div>
    </div>
  );
}

export default Upperhalf;

import React from "react";
import { useAppDispatch } from "../../Hooks/hooks";
import { toggleTempFormat } from "../../Redux/Slices/ForecastSlice";
import { useSelector } from "react-redux";
import ReduxState from "../../Interfaces/ReduxState";

function TopRow({
  setTodWeekToggle,
}: {
  setTodWeekToggle: React.Dispatch<boolean>;
}) {
  const dispatch = useAppDispatch();

  function handleTempFormat(temperature: string) {
    dispatch(toggleTempFormat(temperature));
  }

  const tempFormat = useSelector(
    (state: ReduxState) => state.forecast.tempFormat
  );
  return (
    <div className='flex justify-between items-center w-full px-12 py-2'>
      <div className='flex items-center justify-center text-xl font-semibold'>
        {/* Today or week */}
        <div
          className='mr-4 cursor-pointer'
          onClick={() => setTodWeekToggle(true)}
        >
          Today
        </div>
        <div
          className='ml-4 text-primary cursor-pointer'
          onClick={() => setTodWeekToggle(false)}
        >
          Week
        </div>
      </div>

      <div className='flex items-center justify-center'>
        {/* C or F */}
        <div
          className={`mr-8 cursor-pointer border rounded-[100%] ${
            tempFormat == "celsius"
              ? "bg-[black] text-white"
              : "bg-white text-[#2d2d2d]"
          } text-white px-[14px] py-3`}
          onClick={() => handleTempFormat("celsius")}
        >
          °C
        </div>
        <div
          className={`mr-8 cursor-pointer border rounded-[100%] ${
            tempFormat == "fahrenheit"
              ? "bg-[black] text-white"
              : "bg-white text-[#2d2d2d]"
          } text-white px-[14px] py-3`}
          onClick={() => handleTempFormat("fahrenheit")}
        >
          °F
        </div>
      </div>
    </div>
  );
}

export default TopRow;

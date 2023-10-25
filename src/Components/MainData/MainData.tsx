import { useState } from "react";
import HighLightRow from "./HighlightRow";
import HoursRow from "./HoursRow";
import TopRow from "./TopRow";
import WeekRow from "./WeekRow";

function MainData() {
  const [todWeekToggle, setTodWeekToggle] = useState<boolean>(true);
  return (
    <div className='w-9/12 h-full bg-[#f6f6f8] px-2 py-4 rounded-br-3xl rounded-tr-3xl'>
      <div className='overflow-y-auto overflow-x-hidden h-full'>
        <div className='flex flex-col justify-start py-2 items-center text-black'>
          <TopRow setTodWeekToggle={setTodWeekToggle} />
          <div className='w-full px-4 h-full'>
            {todWeekToggle ? <HoursRow /> : <WeekRow />}
          </div>
          <div className='font-semibold text-2xl mt-8 text-left w-full px-12 py-2'>
            Today's Highlights
          </div>
          <HighLightRow />
        </div>
      </div>
    </div>
  );
}

export default MainData;

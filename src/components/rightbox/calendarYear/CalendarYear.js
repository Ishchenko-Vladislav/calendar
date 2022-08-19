import React, { useEffect } from "react";
import { CalendarYearUI } from "../../UI/style";
import moment from "moment";
import CalendarMonthOfYear from "./calendarMonthOfYear/calendarMonthOfYear";

function CalendarYear({ currentDay, selectMonth }) {
  const startYear = currentDay.month(0);
  const monthOfYear = [...Array(12)].map((_, index) =>
    startYear.clone().month(index)
  );
  return (
    <CalendarYearUI>
      {monthOfYear?.map((month, index) => (
        <CalendarMonthOfYear
          selectMonth={selectMonth}
          key={index}
          month={month}
        />
      ))}
    </CalendarYearUI>
  );
}

export default CalendarYear;

import React, { useEffect } from "react";
import { CalendarYearUI } from "../../UI/style";
import moment from "moment";
import CalendarMonthOfYear from "./calendarMonthOfYear/calendarMonthOfYear";

function CalendarYear({ currentDay, selectMonth }) {
  //   const startYear = moment().year();
  const startYear = moment().month(1);
  //   let monthOfYear = [];
  //   useEffect(() => {
  //     monthOfYear = [...Array(1)].map((_, index) =>
  //       moment().clone().month(index)
  //     );
  //   }, []);
  const monthOfYear = [...Array(12)].map((_, index) =>
    moment().clone().month(index)
  );
  //   console.log(monthOfYear);
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

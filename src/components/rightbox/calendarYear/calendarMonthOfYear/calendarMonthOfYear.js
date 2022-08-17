import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  CalendarDayOfArray,
  CalendarMonthOfYearArrayUI,
  CalendarMonthOfYearTitleUI,
  CalendarMonthOfYearUI,
  CDWArray,
} from "../../../UI/style";

const CalendarMonthOfYear = ({ month, selectMonth }) => {
  const s = month.clone().startOf("month").startOf("week");
  const arrayDay = [...Array(42)].map(() => s.add(1, "day").clone());
  const selectMonthHere = (item) => {
    selectMonth(item);
  };
  return (
    <CalendarMonthOfYearUI
      onClick={(e) => {
        selectMonthHere(month);
      }}
    >
      <CalendarMonthOfYearTitleUI>
        {month.format("MMMM")}
      </CalendarMonthOfYearTitleUI>
      <CDWArray>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
        <div>Su</div>
      </CDWArray>
      <CalendarMonthOfYearArrayUI>
        {arrayDay?.map((day, index) => (
          <CalendarDayOfArray
            now={day.month() == month.month() ? true : false}
            key={index}
          >
            {day.format("DD")}
          </CalendarDayOfArray>
        ))}
      </CalendarMonthOfYearArrayUI>
    </CalendarMonthOfYearUI>
  );
};

export default CalendarMonthOfYear;

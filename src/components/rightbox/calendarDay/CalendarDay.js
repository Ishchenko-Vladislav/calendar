import React, { useEffect } from "react";
import {
  CalendarDayCellUI,
  CalendarDayTitle,
  CalendarDayUI,
} from "../../UI/style";

function CalendarDay({ render, currentDay }) {
  const ShowDay = [...Array(+render)].map((_, index) =>
    currentDay.clone().add(index + 1, "day")
  );
  let dayOfWeek = currentDay.clone().day();
  // console.log(ShowDay);
  return (
    <CalendarDayUI count={+render}>
      {ShowDay?.map((item, index) => (
        <CalendarDayCellUI key={index}>
          <CalendarDayTitle>{item.format("dddd")}</CalendarDayTitle>
          {item.format("D")}
        </CalendarDayCellUI>
      ))}
    </CalendarDayUI>
  );
}

export default CalendarDay;

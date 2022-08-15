import React from "react";
import {
  CalendarCellBgUI,
  CalendarCellsUI,
  CalendarCellUI,
} from "../../UI/style";
// import moment from "moment";

function CalendarCell({ arrayCells, currentTime, ShowOpen }) {
  const Handler = (e) => {
    ShowOpen();
    e.stopPropagation();
  };
  return (
    <CalendarCellBgUI>
      <CalendarCellsUI>
        {arrayCells.map((item, index) => (
          <CalendarCellUI
            id={item.format("X")}
            onClick={Handler}
            month={item.isSame(currentTime, "month") ? true : false}
            today={item.isSame(currentTime, "day") ? true : false}
            key={index}
          >
            {index === 0 ? `${item.format("MM")}/` : ""}
            {item.format("D")}
          </CalendarCellUI>
        ))}
      </CalendarCellsUI>
    </CalendarCellBgUI>
  );
}

export default CalendarCell;

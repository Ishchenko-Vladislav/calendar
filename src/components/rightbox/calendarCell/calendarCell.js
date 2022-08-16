import React from "react";
import {
  CalendarCellBgUI,
  CalendarCellsUI,
  CalendarCellUI,
  EventTitle,
  EventTitleAnim,
} from "../../UI/style";
// import moment from "moment";

function CalendarCell({ arrayCells, currentTime, ShowOpen, arrayUsers }) {
  const Handler = (e, type, date, text = "", id) => {
    ShowOpen(type, text, date, id);
    e.stopPropagation();
  };
  const HandlerCreate = (e, type, date, text = "") => {
    ShowOpen(type, text, date);
    e.stopPropagation();
  };
  return (
    <CalendarCellBgUI>
      <CalendarCellsUI>
        {arrayCells.map((item, index) => (
          <CalendarCellUI
            id={item.format("X")}
            onClick={(e) => HandlerCreate(e, "create", item.format("X"))}
            month={item.isSame(currentTime, "month") ? true : false}
            today={item.isSame(currentTime, "day") ? true : false}
            key={index}
          >
            {index === 0 ? `${item.format("MM")}/` : ""}
            {item.format("D")}
            <div>
              {arrayUsers
                .filter(
                  (user) =>
                    user.data >= item.format("X") &&
                    user.data <= item.clone().endOf("day").format("X")
                )
                .map((item) => (
                  <EventTitle
                    onClick={(e) => Handler(e, "update", 0, item.text, item.id)}
                    key={item.id}
                  >
                    <EventTitleAnim>{item.text}</EventTitleAnim>
                  </EventTitle>
                ))}
            </div>
          </CalendarCellUI>
        ))}
      </CalendarCellsUI>
    </CalendarCellBgUI>
  );
}

export default CalendarCell;

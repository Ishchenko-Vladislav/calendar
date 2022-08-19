import React from "react";
import {
  CalendarCellBgUI,
  CalendarCellsUI,
  CalendarCellUI,
  EventTitle,
  EventTitleAnim,
} from "../../UI/style";
import CalendarDay from "../calendarDay/CalendarDay";
import CalendarYear from "../calendarYear/CalendarYear";
// import moment from "moment";

function CalendarCell({
  arrayCells,
  currentTime,
  ShowOpen,
  arrayUsers,
  render,
  dayNow,
  currentDay,
  selectMonth,
  DayOf,
}) {
  const Handler = (e, type, date, text = "", id) => {
    ShowOpen(type, text, date, id);
    e.stopPropagation();
  };
  const HandlerCreate = (e, type, date, text = "") => {
    ShowOpen(type, text, date);
    e.stopPropagation();
  };
  const ShowDayHandler = (item) => {
    return /[1-6]/.test(item);
  };
  return render == "month" ? (
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
            {item.format("D") == 1
              ? `${item.format("D")}/${item.format("M")}`
              : item.format("D")}
            <div>
              {arrayUsers
                .filter(
                  (user) =>
                    user.data >= item.format("X") &&
                    user.data <= item.clone().endOf("day").format("X")
                )
                .map((item) => (
                  <EventTitle
                    onClick={(e) =>
                      Handler(e, "update", item.data, item.text, item.id)
                    }
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
  ) : render == "day" ? (
    <CalendarDay
      dayNow={dayNow}
      ShowOpen={ShowOpen}
      arrayUsers={arrayUsers}
      currentDay={currentDay}
      DayOf={DayOf}
      render={render}
    />
  ) : render == "week" ? (
    <CalendarDay
      dayNow={dayNow}
      ShowOpen={ShowOpen}
      arrayUsers={arrayUsers}
      currentDay={currentDay}
      DayOf={7}
    />
  ) : render == "year" ? (
    <CalendarYear selectMonth={selectMonth} currentDay={currentDay} />
  ) : (
    <div>everything</div>
  );
}

export default CalendarCell;

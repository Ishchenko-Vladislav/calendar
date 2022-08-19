import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  CalendarDayCellUI,
  CalendarDayTitle,
  CalendarDayUI,
  EventTitle,
  EventTitleAnim,
} from "../../UI/style";

function CalendarDay({ render, currentDay, DayOf, ShowOpen, dayNow }) {
  const Handler = (e, type, date, text = "", id) => {
    ShowOpen(type, text, date, id);
    e.stopPropagation();
  };
  const HandlerCreate = (e, type, date, text = "") => {
    ShowOpen(type, text, date);
    e.stopPropagation();
  };
  const [arrayUsers, setArrayUsers] = useState([]);
  const startDay = currentDay.clone().startOf("month").format("X");
  const lastDay = currentDay.clone().add(42, "day").format("X");
  async function setIvent() {
    const array = await axios.get(
      `http://localhost:5000/events?data_gte=${startDay}&data_lte=${lastDay}`
    );
    setArrayUsers(array.data);
  }
  useEffect(() => {
    setIvent();
  }, [ShowOpen, currentDay]);
  const ShowDay = [...Array(+DayOf)].map((_, index) =>
    currentDay.clone().add(index + 1, "day")
  );
  return (
    <CalendarDayUI count={+DayOf}>
      {ShowDay?.map((item, index) => (
        <CalendarDayCellUI
          onClick={(e) => HandlerCreate(e, "create", item.format("X"))}
          key={index}
        >
          <CalendarDayTitle>
            {item.format("dddd")}/{item.format("DD")}
          </CalendarDayTitle>
          {arrayUsers
            .filter(
              (user) =>
                user.data >= item.startOf("day").format("X") &&
                user.data <= item.endOf("day").format("X")
            )
            .map((user) => (
              <EventTitle
                onClick={(e) =>
                  Handler(e, "update", user.data, user.text, user.id)
                }
                key={user.id}
              >
                <EventTitleAnim>{user.text}</EventTitleAnim>
              </EventTitle>
            ))}
        </CalendarDayCellUI>
      ))}
    </CalendarDayUI>
  );
}

export default CalendarDay;

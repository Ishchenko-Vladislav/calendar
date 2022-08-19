import React, { useRef } from "react";
import { useState, useEffect } from "react";
import CalendarCell from "../calendarCell/calendarCell";
// import { useState } from "react";
import moment from "moment";

import {
  CalendarNavigation,
  CalendarWeekUI,
  CNDayBtn,
  CNDayBtnOption,
  CNDayBtnOptions,
  CNDayBtnSelect,
  CNDayBtnView,
  CNRightBoxUI,
  PLDiv,
  RightBoxUI,
} from "../../UI/style";
import CalendarLeftBox from "../calendarLeftBox/calendarLeftBox";
import EventWindow from "../eventWindow/EventWindow";
import axios from "axios";
import CNRightBox from "../CNRightBox/CNRightBox";
import CalendarDay from "../calendarDay/CalendarDay";

function RightBox() {
  moment.updateLocale("en", { week: { dow: 6 } });

  const [isSelect, setSelect] = useState(false);
  const [isShow, setShow] = useState(false);
  const [ss, setSS] = useState("");
  const [ssId, setSSId] = useState(0);
  const [ssText, setSSText] = useState("");
  const [arrayUsers, setArrayUsers] = useState([]);
  const [dayNow, setDayNow] = useState(moment());
  const [currentDay, setCurrentDay] = useState(moment().clone());
  const [dateCreate, setDateCreate] = useState(0);
  const [render, setRender] = useState("month");
  const [DayOf, setDayOf] = useState(1);
  window.moment = moment();
  window.arrayUsers = arrayUsers;
  async function setIvent() {
    const array = await axios.get(
      `http://localhost:5000/events?data_gte=${startDay}&data_lte=${lastDay}`
    );
    setArrayUsers(array.data);
  }
  useEffect(() => {
    setIvent();
  }, [dayNow, isShow, DayOf, currentDay]);
  useEffect(() => {
    document.addEventListener("click", (e) => setSelect(false));

    return () => {
      document.removeEventListener("click", (e) => setSelect(false));
    };
  }, []);
  const selectToggle = () => {
    return setSelect((prevSelect) => !prevSelect);
  };
  const firstDayCell = dayNow.clone().startOf("month").startOf("week");
  const startDay = firstDayCell.clone().format("X");
  const lastDay = firstDayCell.clone().add(42, "day").format("X");
  const currentTime = moment().clone();
  const arrayCells = [...Array(42)].map(() =>
    firstDayCell.add(1, "day").clone()
  );
  window.arrayCells = arrayCells;
  const changeHandler = (type) => {
    switch (type) {
      case "month":
        setDayNow((prev) => prev.clone().add(1, "month"));
        setCurrentDay((prev) => prev.clone().add(1, "month"));

        break;
      case "monthDown":
        setDayNow((prev) => prev.clone().subtract(1, "month"));
        setCurrentDay((prev) => prev.clone().subtract(1, "month"));

        break;
      case "year":
        // console.log("upYear");
        setDayNow((prev) => prev.clone().add(1, "year"));
        setCurrentDay((prev) => prev.clone().add(1, "year"));
        break;
      case "yearDown":
        setCurrentDay((prev) => prev.clone().subtract(1, "year"));
        setDayNow((prev) => prev.clone().subtract(1, "year"));

        break;
      case "week":
        setCurrentDay((prev) => prev.clone().add(1, "week"));
        setDayNow((prev) => prev.clone().add(1, "week"));
        break;
      case "weekDown":
        setCurrentDay((prev) => prev.clone().subtract(1, "week"));
        setDayNow((prev) => prev.clone().subtract(1, "week"));
        break;
      case "day":
        setDayNow((prev) => prev.clone().add(DayOf, "day"));
        setCurrentDay((prev) => prev.clone().add(DayOf, "day"));

        break;
      case "dayDown":
        setDayNow((prev) => prev.clone().subtract(DayOf, "day"));
        setCurrentDay((prev) => prev.clone().subtract(DayOf, "day"));

        break;
      default:
        break;
    }
  };
  const ShowOpen = (type, text, date, id) => {
    setSSId(id);
    setDateCreate(date);
    // setSSId(id);
    setSS(type);
    setSSText(text);
    setShow(true);
  };
  const ShowClose = () => {
    setShow(false);
  };
  if (isShow) {
    document.addEventListener("click", (e) => {
      setShow(false);
    });
  }
  const changeText = (text) => {
    setSSText(text);
  };

  const eventTemplate = (text) => {
    return {
      id: moment().format("X"),
      text,
      data: dateCreate,
    };
  };
  const updateEvent = (text) => {
    setShow(false);

    const eventObj = eventTemplate(text);
    axios.put(`http://localhost:5000/events/${ssId}`, eventObj);
  };
  const createEvent = (text) => {
    if (text == "") {
      setShow(false);
      return;
    }
    setShow(false);
    const eventObj = eventTemplate(text);
    axios.post("http://localhost:5000/events", eventObj);
  };
  const deleteEvent = (text) => {
    setShow(false);
    const eventObj = eventTemplate(text);
    axios.delete(`http://localhost:5000/events/${ssId}`);
  };
  const renderHandler = (type, e) => {
    setRender(type);
    setDayOf(e);
  };
  const selectMonth = (month) => {
    setRender("month");
    setDayNow(month);
  };

  return (
    <RightBoxUI>
      {isShow && (
        <EventWindow
          updateEvent={updateEvent}
          deleteEvent={deleteEvent}
          createEvent={createEvent}
          changeText={changeText}
          ssText={ssText}
          ss={ss}
          isShow={isShow}
          ShowClose={ShowClose}
        />
      )}
      <CalendarNavigation>
        <CalendarLeftBox
          changeHandler={changeHandler}
          render={render}
          dayNow={dayNow}
        />
        <CNRightBox
          setCurrentDay={setCurrentDay}
          render={render}
          renderHandler={renderHandler}
          isSelect={isSelect}
          selectToggle={selectToggle}
          setDayNow={setDayNow}
        />
      </CalendarNavigation>
      {render == "month" ? (
        <CalendarWeekUI>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </CalendarWeekUI>
      ) : null}

      <CalendarCell
        DayOf={DayOf}
        selectMonth={selectMonth}
        currentDay={currentDay}
        render={render}
        arrayUsers={arrayUsers}
        ShowOpen={ShowOpen}
        onClick={(e) => console.log("click")}
        arrayCells={arrayCells}
        currentTime={currentTime}
      />
    </RightBoxUI>
  );
}

export default RightBox;

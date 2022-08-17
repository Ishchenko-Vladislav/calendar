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
  const [isSelect, setSelect] = useState(false);
  const [isShow, setShow] = useState(false);
  const [ss, setSS] = useState("");
  const [ssId, setSSId] = useState(0);
  const [ssText, setSSText] = useState("");
  const [arrayUsers, setArrayUsers] = useState([]);
  const [dayNow, setDayNow] = useState(moment());
  const [currentDay, setCurrentDay] = useState(moment());
  const [dateCreate, setDateCreate] = useState(0);
  const [render, setRender] = useState("month");

  // const arrayUsers = [
  //   { id: 1, text: "walk in the parks sds dsds", data: 1660559960 },
  //   { id: 2, text: "walk in the park", data: 1660549160 },
  //   { id: 3, text: "walk in the park", data: 1660462760 },
  // ];
  window.arrayUsers = arrayUsers;
  async function setIvent() {
    const array = await axios.get(
      `http://localhost:5000/events?data_gte=${startDay}&data_lte=${lastDay}`
    );
    setArrayUsers(array.data);
  }
  useEffect(() => {
    setIvent();
  }, [dayNow, isShow]);

  useEffect(() => {
    document.addEventListener("click", (e) => setSelect(false));

    return () => {
      document.removeEventListener("click", (e) => setSelect(false));
    };
  }, []);
  const selectToggle = (select) => {
    return setSelect((prevSelect) => !prevSelect);
  };
  const firstDayCell = dayNow.clone().startOf("month").startOf("week");
  // const lastDay = moment().clone().endOf("month").endOf("week");
  const startDay = firstDayCell.clone().format("X");
  const lastDay = firstDayCell.clone().add(42, "day").format("X");
  const currentTime = moment().clone();
  const arrayCells = [...Array(42)].map(() =>
    firstDayCell.add(1, "day").clone()
  );
  const changeHandler = (type) => {
    switch (type) {
      case "upMonth":
        setDayNow((prev) => prev.clone().add(1, "month"));
        break;
      case "downMonth":
        setDayNow((prev) => prev.clone().subtract(1, "month"));

        break;
      case "upYear":
        setDayNow((prev) => prev.clone().add(1, "year"));

        break;
      case "downYear":
        setDayNow((prev) => prev.clone().subtract(1, "year"));
        break;
      case "upWeek":
        setDayNow((prev) => prev.clone().add(1, "week"));
        break;
      case "downWeek":
        setDayNow((prev) => prev.clone().subtract(1, "week"));
        break;
      default:
        break;
    }
  };
  const upMonth = () => {
    setDayNow((prev) => prev.clone().add(1, "month"));
  };
  const downMonth = () => {
    setDayNow((prev) => prev.clone().subtract(1, "month"));
  };
  const upYear = () => {
    setDayNow((prev) => prev.clone().add(1, "year"));
  };
  const downYear = () => {
    setDayNow((prev) => prev.clone().add(1, "year"));
  };
  const upWeek = () => {
    setDayNow((prev) => prev.clone().add(1, "year"));
  };
  const downWeek = () => {
    setDayNow((prev) => prev.clone().add(1, "year"));
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
  const renderHandler = (type) => {
    setRender(type);
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
          upMonth={upMonth}
          downMonth={downMonth}
        />
        <CNRightBox
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

import React from "react";
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
  CNRightBox,
  PLDiv,
  RightBoxUI,
} from "../../UI/style";
import CalendarLeftBox from "../calendarLeftBox/calendarLeftBox";
import EventWindow from "../eventWindow/EventWindow";

function RightBox() {
  const [isSelect, setSelect] = useState(false);
  const [isShow, setShow] = useState(false);
  useEffect(() => {
    document.addEventListener("click", (e) => setSelect(false));

    return () => {
      document.removeEventListener("click", (e) => setSelect(false));
    };
  }, []);
  const [dayNow, setDayNow] = useState(moment());

  const selectToggle = (select) => {
    return setSelect((prevSelect) => !prevSelect);
  };
  const firstDayCell = dayNow.clone().startOf("month").startOf("week");
  // const lastDay = moment().clone().endOf("month").endOf("week");
  const currentTime = moment().clone();
  const arrayCells = [...Array(42)].map(() =>
    firstDayCell.add(1, "day").clone()
  );
  const upMonth = () => {
    setDayNow((prev) => prev.clone().add(1, "month"));
  };
  const downMonth = () => {
    setDayNow((prev) => prev.clone().subtract(1, "month"));
  };
  const ShowOpen = () => {
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

  return (
    <RightBoxUI>
      {isShow && <EventWindow ShowClose={ShowClose} />}
      <CalendarNavigation>
        <CalendarLeftBox
          dayNow={dayNow}
          upMonth={upMonth}
          downMonth={downMonth}
        />
        <CNRightBox>
          <CNDayBtn
            onClick={(e) => {
              setDayNow(moment());
            }}
            toDay
          >
            <ion-icon name="today-outline"></ion-icon>
            <PLDiv>Today</PLDiv>
          </CNDayBtn>

          <CNDayBtnView onClick={(e) => e.stopPropagation()}>
            <CNDayBtn>
              <ion-icon name="today-outline"></ion-icon>
              <PLDiv>Day</PLDiv>
            </CNDayBtn>
            <CNDayBtnSelect onClick={(e) => selectToggle(isSelect)}>
              <ion-icon name="chevron-down-outline"></ion-icon>
            </CNDayBtnSelect>
            <CNDayBtnOptions isSelect={isSelect}>
              <CNDayBtnOption>1</CNDayBtnOption>
              <CNDayBtnOption>2</CNDayBtnOption>
              <CNDayBtnOption>3</CNDayBtnOption>
              <CNDayBtnOption>4</CNDayBtnOption>
              <CNDayBtnOption>5</CNDayBtnOption>
              <CNDayBtnOption>6</CNDayBtnOption>
            </CNDayBtnOptions>
          </CNDayBtnView>
          <CNDayBtn>
            <ion-icon name="calendar-outline"></ion-icon>
            <PLDiv>Week</PLDiv>
          </CNDayBtn>
          <CNDayBtn>
            <ion-icon name="calendar-outline"></ion-icon>
            <PLDiv>Month</PLDiv>
          </CNDayBtn>
          <CNDayBtn>
            <ion-icon name="calendar-outline"></ion-icon>
            <PLDiv>Year</PLDiv>
          </CNDayBtn>
        </CNRightBox>
      </CalendarNavigation>
      <CalendarWeekUI>
        <div>Monday</div>
        <div>Tuesday</div>
        <div>Wednesday</div>
        <div>Thursday</div>
        <div>Friday</div>
        <div>Saturday</div>
        <div>Sunday</div>
      </CalendarWeekUI>
      <CalendarCell
        ShowOpen={ShowOpen}
        onClick={(e) => console.log("click")}
        arrayCells={arrayCells}
        currentTime={currentTime}
      />
    </RightBoxUI>
  );
}

export default RightBox;

import moment from "moment";
import React from "react";
import {
  CNDayBtn,
  CNDayBtnOption,
  CNDayBtnOptions,
  CNDayBtnSelect,
  CNDayBtnView,
  CNRightBoxUI,
  PLDiv,
} from "../../UI/style";

function CNRightBox({
  setDayNow,
  selectToggle,
  isSelect,
  renderHandler,
  render,
  setCurrentDay,
}) {
  const optionHandler = (day, e) => {
    renderHandler(day, e);
    // console.log(e);
  };
  return (
    <CNRightBoxUI>
      <CNDayBtn
        onClick={(e) => {
          setDayNow(moment());
          setCurrentDay(moment());
        }}
        toDay
      >
        <ion-icon name="today-outline"></ion-icon>
        <PLDiv>Today</PLDiv>
      </CNDayBtn>

      <CNDayBtnView onClick={(e) => e.stopPropagation()}>
        <CNDayBtn
          onClick={(e) => {
            optionHandler("day", 1);
          }}
        >
          <ion-icon name="today-outline"></ion-icon>
          <PLDiv>Day</PLDiv>
        </CNDayBtn>
        <CNDayBtnSelect
          onClick={(e) => {
            e.stopPropagation();
            selectToggle(isSelect);
          }}
        >
          <ion-icon name="chevron-down-outline"></ion-icon>
        </CNDayBtnSelect>
        <CNDayBtnOptions
          onClick={(e) => {
            optionHandler("day", e.target.id);
            selectToggle(isSelect);
          }}
          isSelect={isSelect}
        >
          <CNDayBtnOption id="1">1</CNDayBtnOption>
          <CNDayBtnOption id="2">2</CNDayBtnOption>
          <CNDayBtnOption id="3">3</CNDayBtnOption>
          <CNDayBtnOption id="4">4</CNDayBtnOption>
          <CNDayBtnOption id="5">5</CNDayBtnOption>
          <CNDayBtnOption id="6">6</CNDayBtnOption>
        </CNDayBtnOptions>
      </CNDayBtnView>
      <CNDayBtn
        onClick={() => {
          optionHandler("week");
        }}
      >
        <ion-icon name="calendar-outline"></ion-icon>
        <PLDiv>Week</PLDiv>
      </CNDayBtn>
      <CNDayBtn
        onClick={(e) => {
          optionHandler("month");
        }}
      >
        <ion-icon name="calendar-outline"></ion-icon>
        <PLDiv>Month</PLDiv>
      </CNDayBtn>
      <CNDayBtn
        onClick={(e) => {
          optionHandler("year");
        }}
      >
        <ion-icon name="calendar-outline"></ion-icon>
        <PLDiv>Year</PLDiv>
      </CNDayBtn>
    </CNRightBoxUI>
  );
}

export default CNRightBox;

import React from "react";
import { CNBtn, CNLeftBox, DateMonth } from "../../UI/style";

function CalendarLeftBox({ downMonth, upMonth, dayNow }) {
  return (
    <CNLeftBox>
      <CNBtn onClick={upMonth}>
        <ion-icon size="large" name="arrow-down-outline"></ion-icon>
      </CNBtn>
      <CNBtn onClick={downMonth}>
        <ion-icon size="large" name="arrow-up-outline"></ion-icon>
      </CNBtn>
      <DateMonth>
        {dayNow.format("MMMM")} {dayNow.format("YYYY")}
      </DateMonth>
    </CNLeftBox>
  );
}

export default CalendarLeftBox;

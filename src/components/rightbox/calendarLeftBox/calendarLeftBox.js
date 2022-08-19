import React from "react";
import { CNBtn, CNLeftBox, DateMonth } from "../../UI/style";

function CalendarLeftBox({
  downMonth,
  upMonth,
  dayNow,
  render,
  changeHandler,
}) {
  const handler = (type) => {
    changeHandler(type);
  };
  return (
    <CNLeftBox>
      <CNBtn onClick={(e) => handler(`${render}Down`)}>
        {render == "month" ? (
          <ion-icon size="large" name="arrow-up-outline"></ion-icon>
        ) : (
          <ion-icon size="large" name="arrow-back-outline"></ion-icon>
        )}
      </CNBtn>
      <CNBtn onClick={(e) => handler(render)}>
        {render == "month" ? (
          <ion-icon size="large" name="arrow-down-outline"></ion-icon>
        ) : (
          <ion-icon size="large" name="arrow-forward-outline"></ion-icon>
        )}
      </CNBtn>
      {render == "year" ? (
        <DateMonth>{dayNow.format("YYYY")}</DateMonth>
      ) : (
        <DateMonth>
          {dayNow.format("MMMM")}
          {dayNow.format("YYYY")}
        </DateMonth>
      )}
    </CNLeftBox>

    // <CNLeftBox>
    //   {render == ("month" || "week") ? (
    //     <CNBtn onClick={(e) => handler("downMonth")}>
    //       <ion-icon size="large" name="arrow-up-outline"></ion-icon>
    //     </CNBtn>
    //   ) : render == "year" ? (
    //     <CNBtn onClick={(e) => handler("downYear")}>
    //       <ion-icon size="large" name="arrow-back-outline"></ion-icon>
    //     </CNBtn>
    //   ) : null}

    //   {render == "month" ? (
    //     <CNBtn onClick={(e) => handler("upMonth")}>
    //       <ion-icon size="large" name="arrow-down-outline"></ion-icon>
    //     </CNBtn>
    //   ) : render == "year" ? (
    //     <CNBtn onClick={(e) => handler("upYear")}>
    //       <ion-icon size="large" name="arrow-forward-outline"></ion-icon>
    //     </CNBtn>
    //   ) : null}

    //   {render == "year" ? (
    //     <DateMonth>{dayNow.format("YYYY")}</DateMonth>
    //   ) : (
    //     <DateMonth>
    //       {dayNow.format("MMMM")}
    //       {dayNow.format("YYYY")}
    //     </DateMonth>
    //   )}
    // </CNLeftBox>
  );
}

export default CalendarLeftBox;

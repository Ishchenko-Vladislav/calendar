import React from "react";
import {
  EventWindowBgUI,
  EventWindowBtn,
  EventWindowBtnClose,
  EventWindowBtnSave,
  EventWindowInput,
  EventWindowTitleUI,
  EventWindowUI,
} from "../../UI/style";

function EventWindow({ ShowClose }) {
  return (
    <EventWindowBgUI>
      <EventWindowUI onClick={(e) => e.stopPropagation()}>
        <EventWindowTitleUI>Calendar</EventWindowTitleUI>
        <EventWindowInput placeholder="Event Name" type="text" />
        <EventWindowBtn>
          <EventWindowBtnSave>Save</EventWindowBtnSave>
          <EventWindowBtnClose onClick={(e) => ShowClose()}>
            Close
          </EventWindowBtnClose>
        </EventWindowBtn>
      </EventWindowUI>
    </EventWindowBgUI>
  );
}

export default EventWindow;

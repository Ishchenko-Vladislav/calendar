import React from "react";
import {
  EventWindowBgUI,
  EventWindowBtn,
  EventWindowBtnClose,
  EventWindowBtnDelete,
  EventWindowBtnSave,
  EventWindowBtnUpdate,
  EventWindowInput,
  EventWindowTitleUI,
  EventWindowUI,
} from "../../UI/style";

function EventWindow({
  ShowClose,
  isShow,
  ss,
  ssText,
  changeText,
  createEvent,
  deleteEvent,
}) {
  return isShow ? (
    <EventWindowBgUI>
      <EventWindowUI onClick={(e) => e.stopPropagation()}>
        <EventWindowTitleUI>Calendar/{ss}</EventWindowTitleUI>
        <EventWindowInput
          onChange={(e) => {
            changeText(e.target.value);
          }}
          value={ssText}
          placeholder="Event Name"
          type="text"
        />
        <EventWindowBtn>
          {ss === "update" ? (
            <>
              <EventWindowBtnUpdate onClick={(e) => {}}>
                Update
              </EventWindowBtnUpdate>
              <EventWindowBtnDelete
                onClick={(e) => {
                  deleteEvent();
                }}
              >
                Delete
              </EventWindowBtnDelete>
            </>
          ) : (
            <EventWindowBtnSave onClick={(e) => createEvent(ssText)}>
              Create
            </EventWindowBtnSave>
          )}
          <EventWindowBtnClose onClick={(e) => ShowClose()}>
            Close
          </EventWindowBtnClose>
        </EventWindowBtn>
      </EventWindowUI>
    </EventWindowBgUI>
  ) : null;
}

export default EventWindow;

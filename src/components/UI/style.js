import styled from "styled-components";

export const CNBtn = styled.div({
  background: "none",
  border: "none",
  width: 30,
  height: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ":hover": {
    background: "rgba(162, 176, 210, 1)",
    cursor: "pointer",
  },
});

export const CNDayBtn = styled(CNBtn)`
  width: 70px;
  height: 70px;
  margin: 0 0px 0 20px;
  user-select: none;
  border-right: ${(props) => (props.toDay ? "2px solid #c5c6cb" : "")};

  :hover {
    background: "rgba(162, 176, 210, 0.4)";
  }
`;

export const CalendarNavigation = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
export const RightBoxUI = styled.div({
  minWidth: "100%",
  padding: "0px 0",
  position: "relative",
  zIndex: "2",
});
export const DateMonth = styled.div`
  font-size: 30px;
  color: blue;
  opacity: 0.8;
  padding-left: 10px;
  font-weight: 100;
  user-select: none;
`;
export const CNLeftBox = styled.div({
  display: "flex",
  alignItems: "center",
});
export const CNRightBoxUI = styled.div({
  display: "flex",
  alignItems: "center",
});

export const PLDiv = styled.div({
  padding: "0 5px",
});

export const CNDayBtnSelect = styled.div({
  width: 15,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "70px",
  opacity: 0,
  background: "none",
  ":hover": {
    background: "rgba(162, 176, 210, 0.4)",
  },
});

export const CNDayBtnOptions = styled.div`
  display: ${(props) => (props.isSelect ? "block" : "none")};
  position: absolute;
  transition: opacity 0.1s;
  background: #fff;
  box-shadow: 0 0 6px 0px black;
  opacity: ${(props) => (props.isSelect ? "1" : "0")};
  transform: translate(20px, 40%);
`;
export const CNDayBtnOption = styled.div({
  width: 50,
  height: 30,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  cursor: "pointer",

  ":hover": {
    background: "rgba(162, 176, 210, 0.4)",
  },
});

export const CNDayBtnView = styled.div`
  display: flex;
  position: relative;
  :hover {
    > ${CNDayBtnSelect} {
      opacity: 1;
    }
  }
`;

export const CalendarWeekUI = styled.div`
  // width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0 10px 7px;
  text-align: left;
  color: grey;
  user-select: none;
  border-bottom: 1px solid #c5c6cb;
  * {
    padding-right: 10px;
  }
`;

export const CalendarCellsUI = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  row-gap: 1px;
`;

export const CalendarCellBgUI = styled.div`
  background: #c5c6cb;
  /* opacity: 0.5 */
  height: 80.3%;
`;

export const CalendarCellUI = styled.div`
  min-height: 76px;
  min-width: 104px;
  padding: 2px 2px 2px 5px;
  overflow: hidden;
  background: ${(props) => (props.month ? "#fff" : "#DDDDE0")};

  border-top: ${(props) => (props.today ? "3px solid blue" : "none")};
`;

export const EventWindowBgUI = styled.div`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  /* background: #999; */
  /* opacity: 0.5; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EventWindowUI = styled.div`
  box-shadow: 0 0 4px black;
  width: 300px;
  height: 200px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 50;
`;

export const EventWindowTitleUI = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  padding: 5px;
  font-size: 14px;
  box-sizing: border-box;
  align-items: center;
  width: 100%;
  background: yellow;
`;

export const EventWindowInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid yellow;
  margin-bottom: 5px;
`;

export const EventWindowBtn = styled.div`
  display: flex;
  * {
    margin: 0 10px;
  }
`;
export const EventWindowBtnSave = styled.button`
  padding: 10px 20px;
  background: yellow;
  border: none;
`;
export const EventWindowBtnUpdate = styled.button`
  padding: 10px 20px;
  background: yellow;
  border: none;
`;
export const EventWindowBtnDelete = styled.button`
  padding: 10px 20px;
  background: red;
  border: none;
`;

export const EventWindowBtnClose = styled.button`
  padding: 10px 20px;
  background: red;
  border: none;
`;
///////////////////////////////////////////////////////////////////////////////////
export const EventTitle = styled.div`
  height: 20px;
  overflow: hidden;
  background: #999;
  margin-top: 2px;
  margin-bottom: 2px;
  white-space: nowrap;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
  user-select: none;
  z-index: 1;
`;

export const EventTitleAnim = styled.div`
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CalendarDayTitle = styled.div`
  font-size: 12px;
  font-weight: 500;
  border-bottom: 1px solid black;
  line-height: 40px;
`;

export const CalendarDayUI = styled.div`
  display: grid;
  justify-content: space-between;
  /* width: ${(props) => props.count / 800}px; */
  grid-template-columns: repeat(
    ${(props) => props.count},
    ${(props) => 800 / props.count}px
  );

  min-height: 86%;
  overflow: auto;
  grid-template-rows: 1fr;
`;

export const CalendarDayCellUI = styled.div`
  padding: 0 10px;
  :hover {
  }
  :not(:last-child) {
    border-right: 1px solid black;
  }
  border-top: 1px solid black;
`;

export const CalendarYearUI = styled.div`
  height: 450px;
  ::-webkit-scrollbar {
    width: 0px;
  }
  display: grid;
  overflow: scroll;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 170px);
`;

export const CalendarMonthOfYearUI = styled.div`
  padding: 0 15px;
  display: flex;
  flex-direction: column;
  user-select: none;
  cursor: pointer;
  :hover {
    background: #999;
  }
`;
export const CalendarMonthOfYearTitleUI = styled.div`
  font-size: 16px;
`;
export const CalendarMonthOfYearArrayUI = styled.div`
  font-size: 16px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export const CalendarDayOfArray = styled.div`
  font-size: 12px;
  opacity: ${(props) => (props.now ? "none" : 0)};
`;

export const CDWArray = styled.div`
  display: grid;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(7, 1fr);
`;

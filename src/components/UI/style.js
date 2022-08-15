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
  minWidth: "750px",
  padding: "0px 0",
  position: "relative",
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
export const CNRightBox = styled.div({
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
  padding: 2px 2px 2px 5px;
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
    padding: 0 20px;
  }
`;
export const EventWindowBtnSave = styled.button`
  padding: 10px 20px;
  background: yellow;
  border: none;
`;

export const EventWindowBtnClose = styled.button`
  padding: 10px 20px;
  background: red;
  border: none;
`;

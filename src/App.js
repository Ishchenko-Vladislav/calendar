import styled from "styled-components";
import "./App.css";
import LeftBox from "./components/leftbox/leftbox";
import RightBox from "./components/rightbox/calendarRightBox/rightbox";

const CalendarWrapper = styled.div({
  display: "flex",
  width: "800px",
  height: "500px",
  margin: "0 auto",
  border: "1px solid black",
  overflow: "hidden",
});

function App() {
  return (
    <>
      <CalendarWrapper>
        {/* <LeftBox /> */}
        <RightBox />
      </CalendarWrapper>
    </>
  );
}

export default App;

import React from "react";
import styled from "styled-components";

const LeftBoxUI = styled.div({
  height: "100%",
  width: 30,
  overflow: "hidden",
});
function LeftBox() {
  return (
    <LeftBoxUI>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2016/05/24/01/39/mountain-1411625_960_720.jpg"
          alt="background"
        />
      </div>
    </LeftBoxUI>
  );
}

export default LeftBox;

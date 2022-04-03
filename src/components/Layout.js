import React from "react";
import { styled } from "@mui/system";

const StyledDiv = styled("div")({
  backgroundColor: "#f9f9f9",
  width: "100%",
});

export default function Layout({ children }) {
  return (
    <div>
      <StyledDiv>{children}</StyledDiv>
    </div>
  );
}

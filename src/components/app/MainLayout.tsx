import styled from "styled-components";
import { Outlet } from "react-router-dom";
import {  COLOR_WHITE } from "utils/colors";
import Header from "./Header";

// ----------
// Component
// ----------
import Messages from "components/app/Messages";

const StyledLayout = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: ${COLOR_WHITE};
  font-family: "Roboto", sans-serif;
`;


const StyledContainer = styled.div``;

function MainLayout() {
  return (
    <StyledLayout>
      <Header/>
      <StyledContainer>
        <Outlet />
      </StyledContainer>

      <Messages />
    </StyledLayout>
  );
}

export default MainLayout;

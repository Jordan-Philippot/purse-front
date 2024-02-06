import styled from "styled-components";
import Logo from "assets/purse.png";
import { COLOR_WHITE } from "utils/colors";
import { Link } from "react-router-dom";
import { device } from "utils/breakpoints";

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  background-color: ${COLOR_WHITE};
  padding: 15px 24px;
`;

const StyledLogo = styled.img`
  position: relative;
  width: 128px;
  height: auto;
`;
const StyledContainerNavLink = styled.div`
  display: flex;
  gap: 0 20px;
  font-weight: bold;
  margin: auto 0 auto auto;

  @media ${device.tablet} {
    gap: 0 50px;
    margin-right: 50px;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link to={"/"} title="Purse">
        <StyledLogo src={Logo} alt="Purse logo" />
      </Link>
      <StyledContainerNavLink>
        <Link to={"/employee"}>Employé</Link>
        <Link to={"/manager"}>Manager</Link>
      </StyledContainerNavLink>
    </StyledHeader>
  );
}

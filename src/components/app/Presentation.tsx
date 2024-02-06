import Title from "components/ui/Title";
import styled from "styled-components";
import { device } from "utils/breakpoints";
import { COLOR_BLUE, COLOR_PINK, COLOR_WHITE } from "utils/colors";

interface PresentationProps {
  title: string;
}

const StyledPresentation = styled.section`
  position: relative;
  background-color: ${COLOR_BLUE};
  width: 100%;
  overflow: hidden;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const StyledRoundedWhite = styled.div`
  position: absolute;
  background-color: ${COLOR_WHITE};
  top: -450px;
  left: -120px;
  overflow: hidden;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  @media ${device.tablet} {
    top: -400px;
  }
`;
const StyledRoundedPink = styled.div`
  position: absolute;
  background-color: ${COLOR_PINK};
  top: -100px;
  right: -350px;
  overflow: hidden;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  @media ${device.tablet} {
    right: -250px;
  }
  @media ${device.desktop} {
    right: -150px;
  }
`;
export default function Presentation({ title }: PresentationProps) {
  return (
    <StyledPresentation>
      <StyledRoundedWhite />
      <StyledRoundedPink />
      <Title>{title}</Title>
    </StyledPresentation>
  );
}

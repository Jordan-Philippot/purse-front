import styled from "styled-components";
import { COLOR_BLUE } from "utils/colors";

const StyledLoaderContainer = styled.span`
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;

  &::after,
  &::before {
    content: "";
    box-sizing: border-box;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid ${COLOR_BLUE};
    position: absolute;
    left: 0;
    top: 0;
    animation: animloader 2s linear infinite;
  }
  &::after {
    animation-delay: 1s;
  }

  @keyframes animloader {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;

export default function LoaderSuspense() {
  return <StyledLoaderContainer/>;
}

import styled from "styled-components";
import { COLOR_WHITE } from "utils/colors";

interface CircleProps {
  size: number;
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  color: string;
}

type AtLeastOne<T, U = { [K in keyof T]-?: Pick<T, K> }> = Partial<T> &
  U[keyof U];

type AtLeastOneSide = AtLeastOne<
  CircleProps,
  { left: number } | { right: number }
>;
type AtLeastOneHeight = AtLeastOne<
  CircleProps,
  { top: number } | { bottom: number }
>;

type CirclePropsWithConstraints = AtLeastOneSide & AtLeastOneHeight;

const StyledCircle = styled.div<CircleProps>`
  position: absolute;
  background-color: ${COLOR_WHITE};
  top: ${(props) => (props.top ? props.top + "px" : "unset")};
  bottom: ${(props) => (props.bottom ? props.bottom + "px" : "unset")};
  left: ${(props) => (props.left ? props.left + "px" : "unset")};
  right: ${(props) => (props.right ? props.right + "px" : "unset")};
  overflow: hidden;
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  border-radius: 50%;
`;

export default function Circle({
  top,
  left,
  right,
  bottom,
  size,
  color,
}: CirclePropsWithConstraints) {
  return (
    <StyledCircle
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      size={size}
      color={color}
    ></StyledCircle>
  );
}

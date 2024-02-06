import styled from "styled-components";
import type { PropsWithChildren } from "react";
import {
  COLOR_BLACK,
  COLOR_BLUE,
  COLOR_GREY,
  COLOR_PINK,
  COLOR_WHITE,
} from "utils/colors";
import { device } from "utils/breakpoints";

type textSize = "s" | "m" | "l" | "xl";
type textWeight = "200" | "400" | "600" | "800";

export type textColor = "black" | "primary" | "secondary" | "dark" | "light";

export interface TextProps {
  size?: textSize;
  weight?: textWeight;
  color?: textColor;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLParagraphElement>;
}

const handleSizeStyle = (size?: textSize, addMediaSize?: number) => {
  let mediaSize = addMediaSize ? addMediaSize : 0;

  switch (size) {
    case "s":
      return { fontSize: 12 + mediaSize };
    case "m":
      return { fontSize: 14 + mediaSize };
    case "l":
      return { fontSize: 16 + mediaSize };
    case "xl":
      return { fontSize: 26 + mediaSize };
  }
};

const handleColorStyle = (color?: textColor) => {
  switch (color) {
    case "black":
      return COLOR_BLACK;
    case "primary":
      return COLOR_BLUE;
    case "secondary":
      return COLOR_PINK;
    case "light":
      return COLOR_WHITE;
    case "dark":
      return COLOR_GREY;
  }
};

const StyledText = styled.p<TextProps>`
  margin: 0;
  font-size: ${(props) => handleSizeStyle(props.size, 0)?.fontSize}px;
  font-weight: ${(props) => props.weight};
  color: ${(props) => handleColorStyle(props.color)};
  white-space: pre-line;
  line-height: 22px;
  @media ${device.laptop} {
    font-size: ${(props) => handleSizeStyle(props.size, 2)?.fontSize}px;
  }
  @media ${device.laptopL} {
    font-size: ${(props) => handleSizeStyle(props.size, 4)?.fontSize}px;
  }
`;

function Text({
  children,
  size = "m",
  weight = "400",
  color = "black",
  style,
  onClick,
}: PropsWithChildren<TextProps>) {
  return (
    <StyledText
      size={size}
      weight={weight}
      color={color}
      style={style}
      onClick={onClick}
    >
      {children}
    </StyledText>
  );
}

export default Text;

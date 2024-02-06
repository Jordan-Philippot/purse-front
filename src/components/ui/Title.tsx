import styled from "styled-components";
import type { PropsWithChildren } from "react";
import { COLOR_BLACK, COLOR_WHITE } from "utils/colors";
import { device } from "utils/breakpoints";

type titleSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type titleColor = "primary" | "secondary";

export type titleWeight = "200" | "400" | "600" | "800";

interface TitleProps {
  size?: titleSize;
  weight?: titleWeight;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLHeadingElement>;
  color?: titleColor;
}

const handleSizeStyle = (size?: titleSize, addMediaSize?: number) => {
  let mediaSize = addMediaSize ? addMediaSize : 0;

  switch (size) {
    case "h1":
      return { fontSize: 40 + mediaSize };
    case "h2":
      return { fontSize: 30 + mediaSize };
    case "h3":
      return { fontSize: 26 + mediaSize };
    case "h4":
      return { fontSize: 22 + mediaSize };
    case "h5":
      return { fontSize: 20 + mediaSize };
    case "h6":
      return { fontSize: 16 + mediaSize };
  }
};

const StyledTitle = styled.h1<TitleProps>`
  cursor: ${(props) => (props.onClick ? "pointer" : "initial")};
  font-size: ${(props) => handleSizeStyle(props.size)?.fontSize}px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Protest Strike", sans-serif;
  margin: 0;
  line-height: 35px;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color ===  "primary" ? COLOR_WHITE : COLOR_BLACK}  ;
  position: relative;
  @media ${device.tablet} {
    font-size: ${(props) => handleSizeStyle(props.size, 6)?.fontSize}px;
  }
  @media ${device.laptop} {
    font-size: ${(props) => handleSizeStyle(props.size, 10)?.fontSize}px;
  }
  @media ${device.laptopL} {
    font-size: ${(props) => handleSizeStyle(props.size, 14)?.fontSize}px;
  }
`;

function Title({
  children,
  size = "h1",
  weight = "800",
  style,
  color = 'primary',
  onClick,
}: PropsWithChildren<TitleProps>) {
  return (
    <StyledTitle
      as={size}
      size={size}
      weight={weight}
      style={style}
      onClick={onClick}
      color={color}
    >
      {children}
    </StyledTitle>
  );
}

export default Title;

import styled from "styled-components";
import {
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_WHITE,
} from "utils/colors";

export type buttonColor = "light" | "primary" | "secondary";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  icon?: React.ReactElement;
  style?: React.CSSProperties;
  link?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color: buttonColor;
  name?: string;
}

type StyledButtonProps = Omit<ButtonProps, "label" | "icon">;

const handleTypeStyle = (color: buttonColor) => {
  switch (color) {
    case "light":
      return {
        backgroundColor: COLOR_WHITE,
        color: COLOR_PRIMARY,
        backgroundHover: COLOR_PRIMARY,
        border: "1px solid " + COLOR_PRIMARY,
      };
    case "primary":
      return {
        backgroundColor: COLOR_PRIMARY,
        color: COLOR_WHITE,
        backgroundHover: COLOR_PRIMARY + "e6",
        border: "1px solid " + COLOR_PRIMARY,
      };
    case "secondary":
      return {
        backgroundColor: COLOR_SECONDARY,
        color: COLOR_WHITE,
        backgroundHover: COLOR_SECONDARY + "e6",
        border: "1px solid " + COLOR_SECONDARY,
      };
  }
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  font-size: 16px;
  padding: 10px 50px;
  appearance: none;
  white-space: no-wrap;
  width: min-content;
  border: ${(props) => handleTypeStyle(props.color)?.border};
  border-radius: 25px;
  background-color: ${(props) => handleTypeStyle(props.color).backgroundColor};
  color: ${(props) => handleTypeStyle(props.color).color};
  width: auto;
  cursor: pointer;
  transition: all 0.2s;
  svg {
    height: 100%;
    width: 100%;
    margin-right: 10px;
  }
  &:hover {
    background-color: ${(props) =>
      handleTypeStyle(props.color).backgroundHover};
    cursor: pointer;
    color: white;
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

function Button({
  label,
  icon,
  disabled = false,
  onClick,
  style,
  link,
  color = "light",
  name,
}: ButtonProps) {
  return (
    <StyledButton
      disabled={disabled}
      color={color}
      style={style}
      link={link}
      onClick={link ? () => (window.location.href = link) : onClick}
      name={name}
    >
      {icon} {label}
    </StyledButton>
  );
}

export default Button;

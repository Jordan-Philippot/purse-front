import React from "react";
import styled from "styled-components";
import {
  COLOR_ERROR,
  COLOR_SUCCESS,
  COLOR_WARNING,
  COLOR_GREY_LIGHT,
} from "utils/colors";

export type status = "default" | "error" | "success" | "warning";

export interface TextAreaProps {
  name?: string;
  value?: string;
  rows?: number;
  status?: status;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  style?: React.CSSProperties;
}

const handleStyle = (status?: status) => {
  switch (status) {
    case "default":
      return COLOR_GREY_LIGHT;
    case "warning":
      return COLOR_WARNING;
    case "success":
      return COLOR_SUCCESS;
    case "error":
      return COLOR_ERROR;
  }
};

const StyledTextArea = styled.textarea<TextAreaProps>`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 15px;
  border-color: ${(props) => handleStyle(props.status)};
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  outline: 0;
  :disabled {
    opacity: 0.2;
  }
  resize: vertical;
`;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      name,
      value = "",
      rows = 4,
      status = "default",
      disabled,
      onChange,
      style,
    },
    ref
  ) => (
    <>
      <StyledTextArea
        ref={ref}
        name={name}
        status={status}
        disabled={disabled}
        onChange={onChange}
        rows={rows}
        value={value}
        style={style}
      >
        {value}
      </StyledTextArea>
    </>
  )
);

TextArea.displayName = "TextArea";

export default TextArea;

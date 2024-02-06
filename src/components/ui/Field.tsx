import React from "react";
import styled from "styled-components";
import type { status } from "components/ui/Input";
import type { PropsWithChildren } from "react";
import {
  COLOR_BLACK,
  COLOR_ERROR,
  COLOR_SUCCESS,
  COLOR_WARNING,
} from "utils/colors";
import Label from "./Label";

interface FieldProps {
  label?: string | null;
  message?: string;
  status?: status;
  style?: React.CSSProperties;
  required?: boolean;
  htmlFor: string;
}
type StyledMessageFieldProps = Pick<FieldProps, "message" | "status">;

const handleStyle = (status?: status) => {
  switch (status) {
    case "default":
      return COLOR_BLACK;
    case "warning":
      return COLOR_WARNING;
    case "success":
      return COLOR_SUCCESS;
    case "error":
      return COLOR_ERROR;
  }
};

const StyledWrapperField = styled.div`
  font-size: 12px;
  display: flex;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 3px;
  width: 100%;
`;

const StyledField = styled.span<StyledMessageFieldProps>`
  color: ${(props) => handleStyle(props.status)};
  font-size: 12px;
`;
function Field({
  label,
  message,
  status,
  style,
  children,
  required = false,
  htmlFor,
}: PropsWithChildren<FieldProps>) {
  return (
    <StyledWrapperField style={style}>
      {label && (
        <Label htmlFor={htmlFor}>{`${label}${required ? "*" : ""}`}</Label>
      )}
      {children}
      {message && <StyledField status={status}>{message}</StyledField>}
    </StyledWrapperField>
  );
}

export default Field;

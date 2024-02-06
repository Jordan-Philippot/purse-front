import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface LabelProps {
  style?: React.CSSProperties;
  htmlFor: string;
}
const StyledLabel = styled.label`
  font-size: 16px;
  text-align: left;
  margin: 15px auto 15px 0;
`;
export default function Label({
  style,
  htmlFor,
  children,
}: PropsWithChildren<LabelProps>) {
  return (
    <StyledLabel htmlFor={htmlFor} style={style}>
      {children}
    </StyledLabel>
  );
}

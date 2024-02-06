import { ReactNode } from "react";
import styled from "styled-components";

interface ContainerCenteredProps {
  children: ReactNode;
}

const StyledCenteredContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ContainerCentered({
  children,
}: ContainerCenteredProps) {
  return <StyledCenteredContainer>{children}</StyledCenteredContainer>;
}

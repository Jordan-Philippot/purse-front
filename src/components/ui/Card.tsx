import { ReactNode } from "react";
import styled from "styled-components";
import { COLOR_BLACK_LIGHT, COLOR_WHITE } from "utils/colors";

interface CardProps {
  children: ReactNode;
}
const StyledCard = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 80px auto;
  box-shadow: 5px 5px 15px ${COLOR_BLACK_LIGHT}4D;
  background-color: ${COLOR_WHITE};
  border-radius: 12px;
  padding: 50px;
`;
export default function Card({ children }: CardProps) {
  return <StyledCard>{children}</StyledCard>;
}

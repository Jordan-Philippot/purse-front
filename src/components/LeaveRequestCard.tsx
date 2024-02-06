import styled from "styled-components";
import { LeaveRequestType, ValidationStatusType } from "api/leaveRequest.type";
import {
  COLOR_BLACK_LIGHT,
  COLOR_PINK,
  COLOR_PRIMARY,
  COLOR_SUCCESS,
  COLOR_WHITE,
} from "utils/colors";
import Text from "components/ui/Text";
import Button from "./ui/Button";
import { device } from "utils/breakpoints";
import { useModal } from "./context/ModalContext";

interface LabelRequestProps {
  employeeName: string;
  periodFrom: string;
  periodTo: string;
  validationStatus: string;
}
interface LeaveRequestTypeProps {
  data: LeaveRequestType | LabelRequestProps;
  hasData: boolean;
}
const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 15px 0px;
  box-shadow: 5px 5px 15px ${COLOR_BLACK_LIGHT}4D;
  background-color: ${COLOR_WHITE};
  border-radius: 12px;
  padding: 15px 25px;
  width: 80vw;

  button {
    margin: 15px auto 0 auto;
  }
  p {
    margin-bottom: 10px;
  }
  @media ${device.mobile} {
    width: 60vw;
  }
  @media ${device.tablet} {
    width: 90vw;
    flex-direction: row;
    align-items: center;
    p {
      margin-bottom: 0;
      width: 20%;
    }
    button {
      margin: 0 0 0 auto;
    }
  }
  @media ${device.laptop} {
    width: 80vw;
  }
  @media ${device.laptopL} {
    width: 70vw;
  }
  @media ${device.desktop} {
    width: 60vw;
  }
`;

const StyledValidationStatus = styled.div<{ status: string }>`
  background-color: ${(props) => props.status};
  border-radius: 20px;
  padding: 10px 12px;
  width: fit-content;
  color: ${COLOR_WHITE};
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 12px;
  font-weight: bold;
  @media ${device.tablet} {
    position: relative;
    top: unset;
    right: unset;
    font-size: 14px;
  }
`;
export default function LeaveRequestCard({
  data,
  hasData = false,
}: LeaveRequestTypeProps) {
  const getStatusText = (status: ValidationStatusType): string => {
    switch (status) {
      case ValidationStatusType.pending:
        return COLOR_PRIMARY;
      case ValidationStatusType.approved:
        return COLOR_SUCCESS;
      case ValidationStatusType.rejected:
        return COLOR_PINK;
    }
  };

  const fontFamily = hasData ? "Roboto" : "Protest Strike";

  const { openModal } = useModal();

  const openModalWithLeaveRequest = () => {
    if ("id" in data) {
      return openModal(data);
    }
  };

  return (
    <StyledCard>
      <Text
        weight="800"
        style={{ fontFamily: fontFamily, textOverflow: "ellipsis" }}
      >
        {data.employeeName}
      </Text>
      <Text style={{ fontFamily: fontFamily }}>
        {data.periodFrom.toString()}
      </Text>

      <Text style={{ fontFamily: fontFamily }}>{data.periodTo.toString()}</Text>

      {hasData ? (
        <StyledValidationStatus
          status={getStatusText(data.validationStatus as ValidationStatusType)}
        >
          {data.validationStatus}
        </StyledValidationStatus>
      ) : (
        <Text style={{ fontFamily: fontFamily }}>{data.validationStatus}</Text>
      )}
      {hasData && (
        <Button
          color="secondary"
          onClick={openModalWithLeaveRequest}
          label="Consulter"
        />
      )}
    </StyledCard>
  );
}

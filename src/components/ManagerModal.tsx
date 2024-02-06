import { useEffect, useState } from "react";
import styled from "styled-components";
import { useModal } from "components/context/ModalContext";

import { device } from "utils/breakpoints";
// --------------
// Components
// --------------
import Modal from "components/ui/Modal";
import Title from "./ui/Title";
import Text from "components/ui/Text";
import { COLOR_BLUE } from "utils/colors";
import TextArea from "./ui/TextArea";
import Label from "./ui/Label";
import Button from "./ui/Button";
import Select from "./ui/Select";
import { ValidationStatusType } from "api/leaveRequest.type";
import { useLeaveRequest } from "hooks/useLeaveRequest";

const StyledModalBody = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media ${device.tablet} {
    padding: 40px 0;
  }
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  width: auto;
`;
const StyledFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-bottom: 25px;
  @media ${device.mobile} {
    flex-direction: row;
  }
`;
const StyledFlexLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0;
  width: 100%;
`;
export default function ManagerModal() {
  const optionsStatus = [
    {
      label: "En attente",
      value: ValidationStatusType.pending,
    },
    {
      label: "Approuvé",
      value: ValidationStatusType.approved,
    },
    {
      label: "Rejeté",
      value: ValidationStatusType.rejected,
    },
  ];
  const { selectedLeaveRequest, isModalOpen, closeModal } = useModal();
  const { addLeaveRequest } = useLeaveRequest();
  const [validationStatus, setValidationStatus] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  useEffect(() => {
    if (selectedLeaveRequest) {
      setValidationStatus(selectedLeaveRequest.validationStatus);
      setComment(
        selectedLeaveRequest.comment ? selectedLeaveRequest.comment : ""
      );
    }
  }, [selectedLeaveRequest]);

  return (
    <Modal opened={isModalOpen} onClose={closeModal}>
      {selectedLeaveRequest && (
        <StyledModalBody>
          <Title
            color="secondary"
            size="h2"
            style={{ textAlign: "center", marginTop: "25px" }}
          >
            Gestion de la demande
          </Title>

          <StyledContainer>
            <StyledFlexContainer>
              <StyledFlexLabelContainer>
                <Text
                  size="s"
                  weight="800"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: COLOR_BLUE,
                    textUnderlineOffset: "4px",
                  }}
                >
                  Nom de l'employé
                </Text>
                <Text>{selectedLeaveRequest.employeeName}</Text>
              </StyledFlexLabelContainer>
              <StyledFlexLabelContainer>
                <Text
                  size="s"
                  weight="800"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: COLOR_BLUE,
                    textUnderlineOffset: "4px",
                  }}
                >
                  Statut de la demande
                </Text>
                <Text>{selectedLeaveRequest.validationStatus}</Text>
              </StyledFlexLabelContainer>
            </StyledFlexContainer>
            <StyledFlexContainer>
              <StyledFlexLabelContainer>
                <Text
                  size="s"
                  weight="800"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: COLOR_BLUE,
                    textUnderlineOffset: "4px",
                  }}
                >
                  Date de début
                </Text>
                <Text>{selectedLeaveRequest.periodFrom.toString()}</Text>
              </StyledFlexLabelContainer>
              <StyledFlexLabelContainer>
                <Text
                  size="s"
                  weight="800"
                  style={{
                    textDecoration: "underline",
                    textDecorationColor: COLOR_BLUE,
                    textUnderlineOffset: "4px",
                  }}
                >
                  Date de fin
                </Text>
                <Text>{selectedLeaveRequest.periodTo.toString()}</Text>
              </StyledFlexLabelContainer>
            </StyledFlexContainer>
            <Label htmlFor="validationStatus">
              Souhaitez-vous modifier le statut de la demande ?
            </Label>
            <Select
              name="validationStatus"
              onChange={(e) => {
                console.log(e);
                setValidationStatus(e.target.value);
              }}
              options={optionsStatus}
              value={validationStatus}
            />
            <Label htmlFor="comment">Laissez un commentaire</Label>
            <TextArea
              name="comment"
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />

            <Button
              onClick={() =>
                addLeaveRequest({
                  id: selectedLeaveRequest.id,
                  comment: comment,
                  validationStatus: validationStatus as ValidationStatusType,
                })
              }
              label="Envoyer"
              color="primary"
              style={{ marginTop: "25px" }}
              disabled={
                selectedLeaveRequest.validationStatus ===
                ValidationStatusType.approved
                  ? true
                  : false
              }
            />
          </StyledContainer>
        </StyledModalBody>
      )}
    </Modal>
  );
}

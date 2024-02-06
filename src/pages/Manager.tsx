import styled from "styled-components";

import LeaveRequestCard from "components/LeaveRequestCard";
import ContainerCentered from "components/app/ContainerCentered";
import Presentation from "components/app/Presentation";
import Card from "components/ui/Card";
import Text from "components/ui/Text";
import { useLeaveRequest } from "hooks/useLeaveRequest";
import { isMobileDevice } from "utils/isMobile";
import { useEffect, useState } from "react";
import LoaderSuspense from "components/ui/LoaderSuspense";

const StyledFlexContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 50px auto;
`;

export default function Manager() {
  const { leaveRequestList, isLoading } = useLeaveRequest();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const labelData = {
    employeeName: "Nom",
    periodTo: "Date de début",
    periodFrom: "Date de fin",
    validationStatus: "Statut",
  };

  useEffect(() => {
    isMobileDevice({ setIsMobile });

    window.addEventListener("resize", (e) => {
      isMobileDevice({ setIsMobile });
    });
  }, []);

  return (
    <>
      <Presentation title="Demandes de congés" />
      <ContainerCentered>
        <StyledFlexContainer>
          {!isLoading ? (
            leaveRequestList && leaveRequestList.length > 0 ? (
              <>
                {!isMobile && (
                  <LeaveRequestCard data={labelData} hasData={false} />
                )}

                {leaveRequestList.map((request, key) => (
                  <LeaveRequestCard data={request} hasData key={key} />
                ))}
              </>
            ) : (
              <Card>
                <Text weight="800">Aucune demande en cours</Text>
              </Card>
            )
          ) : (
            <LoaderSuspense />
          )}
        </StyledFlexContainer>
      </ContainerCentered>
    </>
  );
}

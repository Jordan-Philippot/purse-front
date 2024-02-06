import ContainerCentered from "components/app/ContainerCentered";
import Presentation from "components/app/Presentation";
import Button from "components/ui/Button";
import Card from "components/ui/Card";
import Text from "components/ui/Text";
import styled from "styled-components";

const StyledButtonContainer = styled.div`
  position: relative;
  display: flex;
  gap: 25px;
  margin-top: 50px;
`;

export default function Home() {
  return (
    <>
      <Presentation title="Bienvenue sur Leave Manager" />
      <ContainerCentered>
        <Card>
          <Text size="xl" weight="800">
            Vous êtes :
          </Text>
          <StyledButtonContainer>
            <Button link="/employee" label="Employé" color="light" />
            <Button link="/manager" label="Manager" color="light" />
          </StyledButtonContainer>
        </Card>
      </ContainerCentered>
    </>
  );
}

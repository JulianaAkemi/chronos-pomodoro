import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../components/templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <Heading>Página não encontrada</Heading>
      </Container>
    </MainTemplate>
  );
}

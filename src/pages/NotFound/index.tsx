import { useEffect } from "react";
import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  useEffect(() => {
    document.title = "Page Not Found - Chronos Pomodoro";
  }, []);

  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>404 - Page Not Found 🚀</Heading>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}

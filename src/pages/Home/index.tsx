import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { TaskForm } from "../../components/TaskForm";

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <TaskForm />
      </Container>
    </MainTemplate>
  );
}

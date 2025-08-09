import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

export default function App() {
  return (
    <>
      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>

      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
}

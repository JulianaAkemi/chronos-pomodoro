import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";
import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Cycles } from "./components/Cycles";

export default function App() {
  return (
    <>
      <Container>
        <Heading>
          <Logo />
        </Heading>
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput id="meuInput" type="text" label="Task" />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <button type="submit">Send</button>
          </div>
        </form>
      </Container>
    </>
  );
}

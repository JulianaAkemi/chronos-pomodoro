import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";
import { Container } from "./components/Container";

export default function App() {
  return (
    <>
      <Container>
        <Heading>
          Hello
          <button>
            <TimerIcon />
          </button>
        </Heading>
      </Container>

      <Container>
        <Heading>
          Hello
          <button>
            <TimerIcon />
          </button>
        </Heading>
      </Container>
    </>
  );
}

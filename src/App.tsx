import { TimerIcon } from "lucide-react";
import { Heading } from "./components/Heading";
import "./styles/global.css";
import "./styles/theme.css";

export default function App() {
  return (
    <div>
      <Heading>
        Hello
        <button>
          <TimerIcon />
        </button>
      </Heading>
    </div>
  );
}

import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      (
      <Container>
        <Heading>
          <button>
            <TimerIcon />
          </button>
          <h1>Chronos</h1>
        </Heading>
      </Container>
      <Container>
        <Heading>
          <section>Menu</section>
        </Heading>
      </Container>
      )
    </>
  );
}

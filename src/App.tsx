import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { TimerIcon } from "lucide-react";

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facilis
        distinctio recusandae est fugiat consectetur, tenetur beatae, pariatur
        necessitatibus totam exercitationem quam tempora. Adipisci quod sunt ut
        atque aperiam voluptatibus!
      </p>
      ;
    </>
  );
}

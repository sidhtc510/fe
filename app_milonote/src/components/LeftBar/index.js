import { Button } from "../Button";
import { Wrapper } from "./Styled/Wrapper";

import StickyNote from "./assets/sticky-note.png";
import Link from "./assets/link.png";

export const LeftBar = ({ onButtonMouseDown }) => {
  return (
    <Wrapper>
      <Button onMouseDown={onButtonMouseDown} background={StickyNote}>
        Note
      </Button>
      <Button background={Link}>Link</Button>
    </Wrapper>
  );
};

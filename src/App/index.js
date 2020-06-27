import React from "react";
import { MdSettings, MdComment, MdShare } from "react-icons/md";
import GlobalStyles from "../styles/global";
import IconButton from "../components/IconButton";

import { Container } from "./styles";

function App() {
  return (
    <Container>
      <GlobalStyles />
      <div>
        <IconButton
          icon={<MdSettings />}
          hint="Configurações"
          size={40}
          caption="Configurações"
          notifications={3}
        />

        <IconButton
          icon={<MdComment />}
          hint="Comentários"
          size={50}
          notifications={1}
        />

        <IconButton
          icon={<MdShare />}
          hint="Compartilhar"
          size={40}
          notifications={1}
        />

        <IconButton
          icon={<MdSettings />}
          hint="Configurações"
          size={30}
          notifications={123}
        />
        <IconButton
          icon={<MdSettings />}
          hint="Configurações"
          size={40}
          notifications={12}
        />

        <IconButton
          icon={<MdSettings />}
          hint="Configurações"
          size={24}
          notifications={12}
        />

        <IconButton icon={<MdSettings />} />
      </div>
    </Container>
  );
}

export default App;

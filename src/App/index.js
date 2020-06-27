import React from 'react';
import { MdSettings, MdComment, MdShare } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import GlobalStyles from '../styles/global';
import IconButton from '../components/IconButton';
import Input from '../components/Input';

import { Container, ContainerButton, ContainerInput } from './styles';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <ContainerButton>
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
      </ContainerButton>
      <ContainerInput>
        <Input
          prefixIcon={<FaFacebook />}
          prefixText="facebook.com/"
          helpText="Informe sua página do facebook"
          placeholder="Digite aqui"
        />
        <Input
          prefixText="facebook.com/"
          helpText="Informe sua página do facebook"
        />
        <Input prefixText="facebook.com/" />
        <Input prefixIcon={<FaFacebook />} />
        <Input prefixText="www." helpText="Informe seu site" />
      </ContainerInput>
    </Container>
  );
}

export default App;

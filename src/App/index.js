import React from 'react';
import {
  MdSettings,
  MdComment,
  MdRefresh,
  MdViewStream,
  MdApps,
  MdNotifications,
  MdArrowUpward,
} from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import GlobalStyles from '../styles/global';
import IconButton from '../components/IconButton';
import Input from '../components/Input';
import Hint from '../components/Hint';
import SelectPanel from '../components/SelectPanel';

import {
  Container,
  ContainerButton,
  ContainerInput,
  ContainerPanel,
  InnerPanel,
} from './styles';

function App() {
  return (
    <Container>
      <GlobalStyles />
      <ContainerButton>
        <IconButton
          size={48}
          icon={<MdViewStream />}
          hint={{
            text: 'Visualização em lista',
            align: 'left',
            width: 150,
          }}
        />
        <IconButton size={48} icon={<MdRefresh />} hint="Atualizar" />
        <IconButton
          size={48}
          icon={<MdSettings />}
          hint={{
            text: 'Configurações',
            align: 'right',
          }}
        />
        <IconButton size={48} icon={<MdApps />} hint="Google apps" />
        <IconButton
          size={48}
          icon={<MdComment />}
          hint="Comentários"
          notifications={3}
        />
        <IconButton
          size={48}
          icon={<MdNotifications />}
          // hint="Notificações"
          renderHint={(parentSize, visible) => (
            <Hint
              hint="Notificações"
              parentSize={parentSize}
              visible={visible}
            />
          )}
          notifications={2}
        />
        <IconButton
          size={48}
          icon={<MdArrowUpward />}
          caption="Up"
          hint="Com caption"
        />
        <IconButton
          size={34}
          icon={<MdViewStream />}
          hint={{
            text: 'Visualização em lista',
            position: 'top',
            align: 'left',
            width: 150,
          }}
        />
        <IconButton
          size={34}
          icon={<MdRefresh />}
          hint={{
            text: 'Atualizar',
            position: 'top',
          }}
        />
        <IconButton
          size={34}
          icon={<MdSettings />}
          hint={{
            text: 'Configurações',
            position: 'top',
            align: 'right',
          }}
        />
        <IconButton
          size={34}
          icon={<MdApps />}
          hint={{
            text: 'Google apps',
            position: 'top',
          }}
        />
        <IconButton
          size={34}
          icon={<MdComment />}
          hint={{
            text: 'Comentários',
            position: 'top',
          }}
          notifications={3}
        />
        <IconButton
          size={34}
          icon={<MdNotifications />}
          hint={{
            text: 'Notificações',
            position: 'top',
          }}
          notifications={2}
        />
        <IconButton
          size={34}
          icon={<MdArrowUpward />}
          caption="Up"
          hint={{
            text: 'Com caption',
            position: 'top',
          }}
        />
      </ContainerButton>
      <ContainerPanel>
        <SelectPanel showSelectIcon>
          <InnerPanel>
            <span>Mensal</span>
            <strong>R$ 9,90</strong>
          </InnerPanel>
        </SelectPanel>
        <SelectPanel showSelectIcon>
          <InnerPanel>
            <span>Trimestral</span>
            <strong>R$ 19,90</strong>
          </InnerPanel>
        </SelectPanel>
        <SelectPanel showSelectIcon>
          <InnerPanel>
            <span>Anual</span>
            <strong>R$ 39,90</strong>
          </InnerPanel>
        </SelectPanel>
      </ContainerPanel>
      <ContainerInput>
        <Input
          prefixIcon={<FaFacebook />}
          prefixText="facebook.com/"
          helpHint={{ text: 'Informe sua página do facebook', width: 150 }}
          placeholder="Digite aqui"
        />
        <Input
          prefixText="facebook.com/"
          // helpHint="Informe sua página do facebook"
          renderHelpHint={(parentSize, visible) => (
            <Hint
              hint={{
                text: 'Informe sua página do facebook',
                position: 'top',
                width: 150,
              }}
              parentSize={parentSize}
              visible={visible}
            />
          )}
        />
        <Input prefixText="facebook.com/" />
        <Input prefixIcon={<FaFacebook />} />
        <Input
          prefixText="www."
          helpHint={{ text: 'Informe seu site', width: 150 }}
        />
      </ContainerInput>
    </Container>
  );
}

export default App;

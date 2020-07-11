import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdCheck } from 'react-icons/md';

import { Wrapper, Container, Selected } from './styles';

function SelectPanel({ showSelectIcon, children }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Wrapper selected={isSelected}>
      <Container
        onMouseEnter={() => setIsSelected(true)}
        onMouseLeave={() => setIsSelected(false)}
      >
        {children}
        {showSelectIcon && isSelected && (
          <Selected>
            <MdCheck size={60} color="#333" />
          </Selected>
        )}
      </Container>
    </Wrapper>
  );
}

export default SelectPanel;

SelectPanel.propTypes = {
  showSelectIcon: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

SelectPanel.defaultProps = {
  showSelectIcon: false,
};

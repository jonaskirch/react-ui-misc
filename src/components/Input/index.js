import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdHelp } from 'react-icons/md';
import InputMask from 'react-input-mask';

import { Container, Prefix, HelpButton, HelpHint } from './styles';

function Input({ prefixIcon, prefixText, helpText, ...rest }) {
  const [showHelpHint, setShowHelpHint] = useState(false);

  return (
    <Container>
      {(prefixIcon || prefixText) && (
        <Prefix>
          {prefixIcon}
          {prefixText && <span>{prefixText}</span>}
        </Prefix>
      )}
      <InputMask {...rest} />
      {helpText && (
        <HelpButton
          onMouseEnter={() => setShowHelpHint(true)}
          onMouseLeave={() => setShowHelpHint(false)}
        >
          <MdHelp />
          {showHelpHint && <HelpHint>{helpText}</HelpHint>}
        </HelpButton>
      )}
    </Container>
  );
}

export default Input;

Input.propTypes = {
  prefixIcon: PropTypes.element,
  prefixText: PropTypes.string,
  helpText: PropTypes.string,
};

Input.defaultProps = {
  prefixIcon: null,
  prefixText: '',
  helpText: '',
};

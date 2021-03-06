import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdHelp } from 'react-icons/md';
import InputMask from 'react-input-mask';
import Hint from '../Hint';

import { Container, Prefix, HelpButtonContainer, HelpButton } from './styles';

function Input({ prefixIcon, prefixText, helpHint, renderHelpHint, ...rest }) {
  const [active, setActive] = useState(false);
  const [showHelpHint, setShowHelpHint] = useState(false);

  return (
    <Container active={active}>
      {(prefixIcon || prefixText) && (
        <Prefix>
          {prefixIcon}
          {prefixText && <span>{prefixText}</span>}
        </Prefix>
      )}
      <InputMask
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        {...rest}
      />
      {(helpHint || renderHelpHint) && (
        <HelpButtonContainer>
          <HelpButton
            tabIndex={-1}
            onMouseEnter={() => setShowHelpHint(true)}
            onMouseLeave={() => setShowHelpHint(false)}
          >
            <MdHelp />
          </HelpButton>
          {renderHelpHint && renderHelpHint(showHelpHint)}
          {helpHint && (
            <Hint hint={helpHint} parentSize={20} visible={showHelpHint} />
          )}
        </HelpButtonContainer>
      )}
    </Container>
  );
}

export default Input;

Input.propTypes = {
  prefixIcon: PropTypes.element,
  prefixText: PropTypes.string,
  helpHint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      position: PropTypes.oneOf(['bottom', 'top']),
      align: PropTypes.oneOf(['left', 'center', 'right']),
      width: PropTypes.number,
    }),
  ]),
  renderHelpHint: PropTypes.func,
};

Input.defaultProps = {
  prefixIcon: null,
  prefixText: '',
  helpHint: '',
  renderHelpHint: null,
};

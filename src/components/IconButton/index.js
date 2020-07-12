import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Hint from '../Hint';

import { Wrapper, Container, Button, Notification } from './styles';

function IconButton({ size, icon, hint, renderHint, caption, notifications }) {
  const [showHint, setShowHint] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Button
          height={size}
          width={!caption ? size : 0}
          onMouseEnter={() => setShowHint(true)}
          onMouseLeave={() => setShowHint(false)}
        >
          {icon}
          {caption}
          {notifications > 0 && <Notification>{notifications}</Notification>}
        </Button>
        {renderHint && renderHint(size, showHint)}
        {hint && <Hint hint={hint} parentSize={size} visible={showHint} />}
      </Container>
    </Wrapper>
  );
}

export default IconButton;

IconButton.propTypes = {
  size: PropTypes.number,
  icon: PropTypes.element.isRequired,
  hint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      position: PropTypes.oneOf(['bottom', 'top']),
      align: PropTypes.oneOf(['left', 'center', 'right']),
      width: PropTypes.number,
    }),
  ]),
  renderHint: PropTypes.func,
  caption: PropTypes.string,
  notifications: PropTypes.number,
};

IconButton.defaultProps = {
  hint: '',
  renderHint: null,
  size: 40,
  caption: '',
  notifications: null,
};

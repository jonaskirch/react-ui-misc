import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container, Button, Hint, Notification } from './styles';

function IconButton({ size, icon, hint, caption, notifications }) {
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
        {hint && (
          <Hint
            buttonSize={size}
            visible={showHint}
            position={hint?.position}
            align={hint?.align}
            width={hint?.width}
          >
            {hint?.text || hint}
          </Hint>
        )}
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
  caption: PropTypes.string,
  notifications: PropTypes.number,
};

IconButton.defaultProps = {
  hint: '',
  size: 40,
  caption: '',
  notifications: null,
};

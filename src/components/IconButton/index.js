import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Container, Button, Hint, Notification } from './styles';

function IconButton({ icon, hint, size, caption, notifications }) {
  const [showHint, setShowHint] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Button
          size={size}
          onMouseEnter={() => setShowHint(true)}
          onMouseLeave={() => setShowHint(false)}
        >
          {icon}
          {caption}
          {notifications > 0 && (
            <Notification size={size}>{notifications}</Notification>
          )}
        </Button>
        {hint && showHint && <Hint>{hint}</Hint>}
      </Container>
    </Wrapper>
  );
}

export default IconButton;

IconButton.propTypes = {
  icon: PropTypes.element.isRequired,
  hint: PropTypes.string,
  size: PropTypes.number,
  caption: PropTypes.string,
  notifications: PropTypes.number,
};

IconButton.defaultProps = {
  hint: '',
  size: 40,
  caption: '',
  notifications: null,
};

import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Hint({ hint, parentSize, visible }) {
  return (
    <Container
      parentSize={parentSize}
      visible={visible}
      position={hint?.position}
      align={hint?.align}
      width={hint?.width}
    >
      {hint?.text || hint}
    </Container>
  );
}

export default Hint;

Hint.propTypes = {
  hint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      position: PropTypes.oneOf(['bottom', 'top']),
      align: PropTypes.oneOf(['left', 'center', 'right']),
      width: PropTypes.number,
    }),
  ]).isRequired,
  parentSize: PropTypes.number.isRequired,
  visible: PropTypes.bool.isRequired,
};

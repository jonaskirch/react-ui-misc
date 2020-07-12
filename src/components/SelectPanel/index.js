import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, PanelWrapper, PanelContainer } from './styles';

function SelectPanel({ indexSelectedDefault, children }) {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Wrapper>
      {children.map((child, i) => (
        <PanelWrapper
          key={i}
          selected={i === indexSelectedDefault && !isSelected}
        >
          <PanelContainer
            selected={i === indexSelectedDefault && !isSelected}
            onMouseEnter={() => setIsSelected(true)}
            onMouseLeave={() => setIsSelected(false)}
          >
            {child}
          </PanelContainer>
        </PanelWrapper>
      ))}
    </Wrapper>
  );
}

export default SelectPanel;

SelectPanel.propTypes = {
  indexSelectedDefault: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.node, PropTypes.element])
  ).isRequired,
};

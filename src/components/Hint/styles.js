import styled from 'styled-components';

export const Container = styled.div`
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.visible ? '0.9' : '0')};
  transition: visibility 0s, opacity 0.3s linear;
  position: absolute;
  display: flex;
  justify-content: center;
  text-align: center;
  background: #333;
  color: #f5f5f5;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
  z-index: 9;
  width: ${(props) => props.width}px;

  ${(props) =>
    props.position === 'top'
      ? `bottom: ${props.parentSize + 10}px`
      : `top: ${props.parentSize + 10}px`};

  ${(props) => {
    if (props.align === 'right') return 'right: 0';
    if (props.align === 'left') return 'left: 0';
    return '';
  }};

  &::before {
    content: '';
    position: absolute;

    ${(props) => (props.position === 'top' ? 'bottom: -8px' : 'top: -8px')};

    ${(props) => {
      if (props.align === 'right')
        return `right: ${props.parentSize / 2 - 8}px`;
      if (props.align === 'left') return `left: ${props.parentSize / 2 - 8}px`;
      return 'left: calc(50% - 8px);';
    }};
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    ${(props) =>
      props.position === 'top'
        ? 'border-top: 8px solid #333'
        : 'border-bottom: 8px solid #333'};
  }
`;

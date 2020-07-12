import styled from 'styled-components';
import { darken } from 'polished';

const colors = {
  icon: '#57a',
  backgroundButton: '#eee',
  backgroundButtonHover: '#ddd',
  backgroundNotification: 'rgb(161, 14, 14)',
};

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  background: ${colors.backgroundButton};
  border-radius: 50%;
  height: ${(props) => props.height}px;
  width: ${(props) => (props.width > 0 ? `${props.width}px` : '100%')};
  padding: ${(props) => !props.width && props.height * 0.2}px;
  color: ${colors.icon};
  transition: background 0.3s;

  svg {
    transition: color 0.3s;
    color: ${colors.icon};
    font-size: ${(props) => props.height * 0.6}px;
  }

  &:hover {
    background: ${colors.backgroundButtonHover};

    svg {
      color: ${darken(0.2, colors.icon)};
    }
  }
`;

export const Notification = styled.div`
  position: absolute;
  background: ${colors.backgroundNotification};
  color: #f5f5f5;
  border-radius: 50%;
  border: 2px solid #f5f5f5;
  padding: 3px 6px;
  min-height: 18px;
  min-width: 18px;
  font-size: 13px;
  margin: auto;
  top: -6px;
  left: calc(100% - 18px);
`;

export const Hint = styled.div`
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
      ? `bottom: ${props.buttonSize + 10}px`
      : `top: ${props.buttonSize + 10}px`};

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
        return `right: ${props.buttonSize / 2 - 8}px`;
      if (props.align === 'left') return `left: ${props.buttonSize / 2 - 8}px`;
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

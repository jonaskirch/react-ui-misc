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
  border: none;
  background: ${colors.backgroundButton};
  border-radius: 50%;
  padding: ${(props) => props.size * 0.2}px;
  transition: background 0.3s;
  color: ${colors.icon};

  svg {
    transition: color 0.3s;
    color: ${colors.icon};
    font-size: ${(props) => props.size * 0.8}px;
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
  color: #fff;
  border-radius: 50%;
  padding: 3px 6px;
  min-height: 18px;
  min-width: 18px;
  font-size: 13px;
  margin: auto;
  top: -6px;
  left: calc(100% - 18px);
`;

export const Hint = styled.div`
  position: absolute;
  bottom: -35px;
  background: #333;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 13px;
  opacity: 0.9;
  z-index: 9;

  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: calc(50% - 8px);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #333;
  }
`;

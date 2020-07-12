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

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 4px;
  color: #333;
  margin-bottom: 10px;

  input {
    color: #333;
    border: none;
    padding: 0 10px;
    width: 100%;

    &::placeholder {
      color: #999;
    }
  }
`;

export const Prefix = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: #ddd;
  padding-left: 10px;
  padding-right: 5px;

  svg {
    font-size: 20px;
    margin-right: 5px;
  }

  span {
    margin-right: 5px;
  }
`;

export const HelpButton = styled.button`
  position: relative;
  border: none;
  background: none;
  cursor: default;
  color: #999;
  transition: color 0.3s;
  margin-right: 5px;

  &:hover {
    color: #666;
  }

  svg {
    font-size: 20px;
  }
`;

export const HelpHint = styled.div`
  position: absolute;
  top: 30px;
  right: -65px;
  width: 150px;
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

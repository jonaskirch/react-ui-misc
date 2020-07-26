import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid ${(props) => (props.active ? '#999' : '#ddd')};
  border-radius: 4px;
  color: #333;
  margin-bottom: 10px;
  /* overflow: hidden; */

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
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;

  svg {
    font-size: 20px;
    margin-right: 5px;
  }

  span {
    margin-right: 5px;
  }
`;

export const HelpButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-right: 5px;
`;

export const HelpButton = styled.button`
  position: relative;
  border: none;
  background: none;
  cursor: default;
  color: #999;
  height: 20px;
  width: 20px;
  transition: color 0.3s;

  &:hover {
    color: #666;
  }

  svg {
    font-size: 20px;
  }
`;

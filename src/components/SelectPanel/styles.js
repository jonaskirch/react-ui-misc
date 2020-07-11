import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  padding: ${(props) => (props.selected ? '0' : '12px')} 0;
  transition: padding 0.5s;

  &:hover {
    padding: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
`;

export const Selected = styled.div`
  display: block;
  position: absolute;
  top: -30px;
  left: calc(50% - 30px);
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PanelWrapper = styled.div`
  padding: ${(props) => (props.selected ? '0' : '12px')} 0;
  transition: padding 0.5s;

  &:hover {
    padding: 0;
  }
`;

export const PanelContainer = styled.div`
  height: 100%;
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.selected
      ? '0 0 20px rgba(0, 0, 0, 0.5)'
      : '0 0 16px rgba(0, 0, 0, 0.2)'};
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
`;

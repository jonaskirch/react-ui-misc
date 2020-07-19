import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerButton = styled.div`
  padding: 50px 0 30px 0;
  margin: auto;
  max-width: 800px;

  & > * {
    margin-right: 5px;
  }
`;

export const ContainerInput = styled.div`
  padding: 30px 0;
  margin: auto;
  max-width: 800px;
`;

export const ContainerPanel = styled.div`
  padding: 30px 0;
  max-width: 950px;
  margin: auto;
`;

export const InnerPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 300px;

  span {
    font-size: 20px;
    margin-bottom: 20px;
  }

  strong {
    font-size: 35px;
    font-weight: bold;
  }
`;

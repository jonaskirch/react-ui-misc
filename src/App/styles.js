import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerButton = styled.div`
  margin: 30px;
  padding: 30px;
  border-bottom: 1px solid #666;

  & > * {
    margin-right: 20px;
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
  display: flex;
  justify-content: space-between;
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

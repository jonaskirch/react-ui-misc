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

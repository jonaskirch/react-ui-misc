import styled from "styled-components";

export const Container = styled.div`
  & > div {
    margin: 30px;
    padding: 30px;
    border-bottom: 1px solid #666;

    & > * {
      margin-right: 20px;
    }
  }
`;

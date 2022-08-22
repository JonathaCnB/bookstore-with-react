import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: ${({ theme }) => theme.colors.error};
    margin: 0 10px 0 0;
    font-weight: bold;
  }
`;

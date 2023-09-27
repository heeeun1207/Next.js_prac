import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Lable = styled.h1`
  margin-top: 0;
`;

export const Title = () => {
  return (
    <Container>
      <Lable>할 일 목록</Lable>
    </Container>
  );
};

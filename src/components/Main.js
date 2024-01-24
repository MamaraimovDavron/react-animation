import React from "react";
import Left from "./Left";
import Right from "./Right";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Main = () => {
  return (
    <Container>
      <Left />
      <Right />
    </Container>
  );
};

export default Main;

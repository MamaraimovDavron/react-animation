import React from "react";
import styled from "styled-components";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import About from "./About";
import Fact from "./Fact";

const Container = styled.div`
  width: 84%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Courier New", Courier, monospace;
  h2 {
    font-size: 50px;
    color: black;
    /* position: absolute; */
  }
  p {
    padding: 0;
    margin: 0;
    font-size: 25px;
    font-weight: bold;
    color: black;
  }
`;

const Right = () => {
  const [text] = useTypewriter({
    words: ["Junior Front End Developer", "Coder", "Photographer"],
    loop: {},
  });
  return (
    <Container>
      <Background>
        <h2>Davron Mamaraimov</h2>
        <p>
          I am a{" "}
          <span
            style={{
              fontWeight: "bold",
              color: "black",
              fontFamily: "monospace",
              textDecoration: "2px underline #149DDD",
            }}
          >
            {text}
          </span>
          <span>
            <Cursor cursorStyle=" </>" />
          </span>
        </p>
      </Background>
      <About />
      <Fact />
    </Container>
  );
};

export default Right;

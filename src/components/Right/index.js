import React from "react";
import styled from "styled-components";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import About from "./About";
import Fact from "./Fact";
import Skill from "./Skill";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

const Container = styled.div`
  width: 84%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("https://luxe-host.ru/wp-content/uploads/3/9/4/3948c2cfba607a17612bdc0ad9b9a830.jpeg");
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
    color: white;
    /* position: absolute; */
  }
  p {
    padding: 0;
    margin: 0;
    font-size: 25px;
    font-weight: bold;
    color: white;
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
              color: "white",
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
      <Skill />
      <Resume />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </Container>
  );
};

export default Right;

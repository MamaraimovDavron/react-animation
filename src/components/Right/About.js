import React from "react";
import styled from "styled-components";
import me from "../Left/avatar/1705845042297.jpg";
import { Slide } from "react-awesome-reveal";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Container = styled.div`
  display: flex;
  height: 60vh;
  flex-direction: column;
  padding: 80px 150px;
  gap: 20px;
  overflow: hidden;
  div {
    h2 {
      font-size: 30px;
      width: 4%;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      color: #173b6c;
      border-bottom: 3px solid #149ddd;
      padding-bottom: 10px;
    }
  }
`;

const Text = styled.div`
  width: "100%";
  font-size: 18px;
  text-align: justify;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 100%;
`;

const Info = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0;
    padding: 0;
    font-size: 28px;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    color: #173b6c;
  }
  p {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 16px;
  }

  .grid {
    display: grid;
    grid-template-columns: auto auto;
    .item {
      list-style: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      .icon {
        color: #149ddd;
      }
      h4 {
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
      }

      p {
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        font-size: 14px;
        margin: 0;
        padding: 0;
      }
    }
  }
`;

const title = [
  "Birthday",
  "Age",
  "Website",
  "Degree",
  "Phone",
  "Email",
  "City",
  "Freelance",
];

const info = [
  "2 July 1996",
  27,
  "www.example.com",
  "Bachelor",
  "+998999374996",
  "davronmamaraimov1996@gmail.com",
  "Tashkent region, Uzbekistan",
  "Available",
];

const About = () => {
  return (
    <Container>
      <div>
        <h2>About</h2>
      </div>

      <Text>
        After graduating from the university, I worked as an IT specialist in
        various state organizations. However, this did not give me the
        opportunity to fully enter the world of IT and understand its essence.
        And, after that, I continued to delve deeper into the IT field and learn
        web programming. Learning web programming has brought many positive
        changes to my life. I began to see the beauty of life and its colors in
        the codes I was writing. And, I tried to create several small projects
        in this area.
      </Text>

      <Box>
        <Slide style={{ width: "30%" }} direction="left" duration={2000}>
          <Img src={me}></Img>
        </Slide>

        <Slide style={{ width: "68%" }} duration={2000} direction="right">
          <Info>
            <h3>Junior Front End Web Developer</h3>
            <p>
              In order to create ease and convenience for users, I focused on
              important web technologies such as HTML, CSS, Sass, Bootstrap,
              JavaScript, React and Redux. To strengthen my knowledge of these
              technologies, I have implemented several small projects. You can
              see it through the following links.
            </p>

            <div className="grid">
              {title.map((item, index) => {
                const info1 = info[index];
                return (
                  <div className="item">
                    <KeyboardArrowRightIcon className="icon" />
                    <h4>{item}</h4>:<p>{info1}</p>
                  </div>
                );
              })}
            </div>
          </Info>
        </Slide>
      </Box>
    </Container>
  );
};

export default About;

import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { Slide } from "react-awesome-reveal";

const Container = styled.div`
  display: flex;
  height: 48vh;
  flex-direction: column;
  padding: 40px 150px;
  gap: 10px;
  background-color: #f5f8fd;
  div {
    h2 {
      font-size: 30px;
      width: 3%;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
      color: #173b6c;
      border-bottom: 3px solid #149ddd;
      padding-bottom: 10px;
    }
  }

  p {
    padding: 0;
    margin: 0;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-size: 17px;
  }

  .grid {
    display: grid;
    grid-template-columns: auto auto;
    font-size: 12px;
    gap: 10px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    .item {
      .item-top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        h3 {
          display: flex;
          gap: 2px;
        }
      }

      .item-bottom {
        background-color: #dce8f8;
        height: 10px;
        .box {
          height: 10px;
          background-color: #149ddd;
          width: 50%;
        }
      }
    }
  }
`;

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 4000,
    config: { mass: 10, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const data = [
  { programming: "HTML", percent: <Number n={100} />, number: 100 },
  { programming: "Css", percent: <Number n={90} />, number: 90 },
  { programming: "Sass", percent: <Number n={85} />, number: 85 },
  { programming: "Bootstrap", percent: <Number n={80} />, number: 80 },
  { programming: "Javascript", percent: <Number n={75} />, number: 75 },
  { programming: "React", percent: <Number n={80} />, number: 80 },
  { programming: "Redux", percent: <Number n={70} />, number: 70 },
  { programming: "Material UI", percent: <Number n={90} />, number: 90 },
];

const Skill = () => {
  return (
    <Container>
      <div>
        <h2>Skills</h2>
      </div>

      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>

      <div className="grid">
        {data.map((item) => {
          return (
            <div className="item">
              <div className="item-top">
                <h3>{item.programming}</h3>
                <h3>{item.percent}%</h3>
              </div>
              <div className="item-bottom" style={{ width: "100%" }}>
                <Slide>
                  <div
                    className="box"
                    style={{ width: `${item.number}%` }}
                  ></div>
                </Slide>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Skill;

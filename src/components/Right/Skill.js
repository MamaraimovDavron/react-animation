import React from "react";
import styled from "styled-components";

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
      }

      .item-bottom {
        background-color: #dce8f8;
        width: 100%;
        height: 10px;
        .box {
          height: 10px;
          background-color: #149ddd;
        }
      }
    }
  }
`;

const data = [
  { programming: "HTML", percent: 100 },
  { programming: "Css", percent: 90 },
  { programming: "Sass", percent: 85 },
  { programming: "Bootstrap", percent: 80 },
  { programming: "Javascript", percent: 75 },
  { programming: "React", percent: 80 },
  { programming: "Redux", percent: 70 },
  { programming: "Material UI", percent: 90 },
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
              <div className="item-bottom">
                <div
                  className="box"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Skill;

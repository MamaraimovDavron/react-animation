import React from "react";
import styled from "styled-components";
import { Bounce } from "react-awesome-reveal";

const Container = styled.div`
  display: flex;
  height: 135vh;
  flex-direction: column;
  padding: 20px 150px;
  gap: 20px;
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

  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
    .item {
      width: 100%;
      img {
        width: 100%;
        cursor: pointer;
      }
    }
  }
`;

const data = [
  {
    imgUrl:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-1.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-2.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-3.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-4.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-5.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-6.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-7.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-8.jpg",
  },
  {
    imgUrl:
      "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/portfolio/portfolio-9.jpg",
  },
];

const Portfolio = () => {
  return (
    <Container>
      <div>
        <h2>Facts</h2>
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
            <Bounce>
              <div className="item">
                <img src={item.imgUrl} alt="" />
              </div>
            </Bounce>
          );
        })}
      </div>
    </Container>
  );
};

export default Portfolio;

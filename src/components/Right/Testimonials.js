import React from "react";
import styled from "styled-components";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { Zoom } from "react-awesome-reveal";

const Container = styled.div`
  display: flex;
  height: 70vh;
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

  p {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 40px;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 35px;

      /* padding: 10px; */
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 18px 10px;
        position: relative;
        background-color: white;
        box-shadow: 0px 0px 15px 1px #c8c8c8;
        border-radius: 6px;
        .text {
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          padding: 0;
          margin: 0;
          font-style: italic;
          text-align: center;
          color: #3a3b3b;

          .icon {
            font-size: 30px;
            color: #c3e8fa;
          }
        }

        .triangle {
          /* border: 2px solid red; */
          background-color: white;
          width: 30px;
          height: 30px;
          position: absolute;
          bottom: -15px;
          transform: rotate(45deg);
        }
      }

      img {
        width: 22%;
        border-radius: 50%;
      }

      span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        h3 {
          padding: 0;
          margin: 0;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-size: 21px;
        }
        h4 {
          padding: 0;
          margin: 0;
          font-weight: 300;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-size: 15px;
          color: #999999;
        }
      }
    }
  }
`;

const data = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum debitis reprehenderit itaque repudiandae blanditiis saepe unde eaquae reiciendis. Blanditiis laudantium accusamus similique magnam.Voluptate velit reprehenderit odio cum rerum?",
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/testimonials/testimonials-4.jpg",
    name: "Matt Brandon",
    job: "Freelancer",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum debitis reprehenderit itaque repudiandae blanditiis saepe unde eaquae reiciendis. Blanditiis laudantium accusamus similique magnam.Voluptate velit reprehenderit odio cum rerum?",
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/testimonials/testimonials-5.jpg",
    name: "John Larson",
    job: "Entrepreneur",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolorum debitis reprehenderit itaque repudiandae blanditiis saepe unde eaquae reiciendis. Blanditiis laudantium accusamus similique magnam.Voluptate velit reprehenderit odio cum rerum?",
    img: "https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/testimonials/testimonials-1.jpg",
    name: "Saul Goodman",
    job: "Ceo & Founder",
  },
];

const Testimonials = () => {
  return (
    <Container>
      <div>
        <h2>Testimonials</h2>
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
            <Zoom>
              <div className="item">
                <div className="box">
                  <p className="text">
                    <FormatQuoteIcon className="icon" />
                    {item.text}
                    <FormatQuoteIcon className="icon" />
                  </p>

                  <div className="triangle"></div>
                </div>
                <img src={item.img} alt="" />
                <span>
                  <h3>{item.name}</h3>
                  <h4>{item.job}</h4>
                </span>
              </div>
            </Zoom>
          );
        })}
      </div>
    </Container>
  );
};

export default Testimonials;

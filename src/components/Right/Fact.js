import React from "react";
import styled from "styled-components";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useSpring, animated } from "react-spring";

const Container = styled.div`
  display: flex;
  height: 40vh;
  flex-direction: column;
  padding: 20px 150px;
  gap: 20px;
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
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  /* padding: 30px; */
  justify-content: space-around;
  .card {
    width: 16%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;

    .cardIcon {
      .icon {
        font-size: 60px;
        color: #149ddd;
      }
    }

    .cardInfo {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;

      h1 {
        font-size: 40px;
        font-family: "Century Gothic";
        padding: 0;
        margin: 0;
      }

      h5 {
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        padding: 0;
        margin: 0;
        font-size: 15px;
      }
      p {
        padding: 0;
        margin: 0;
        color: gray;
      }
    }
  }
`;

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 3000,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
};

const data = [
  {
    icon: <SentimentSatisfiedAltOutlinedIcon className="icon" />,
    number: <Number n={232} />,
    title: "Happy Clients",
    lorem: "consequuntur quae",
  },
  {
    icon: <NewspaperOutlinedIcon className="icon" />,
    number: <Number n={521} />,
    title: "Projects",
    lorem: "adipisci atque cum quia aut",
  },
  {
    icon: <HeadphonesOutlinedIcon className="icon" />,
    number: <Number n={1453} />,
    title: "Hours Of Support",
    lorem: "aut commodi quaerat",
  },
  {
    icon: <PeopleAltOutlinedIcon className="icon" />,
    number: <Number n={32} />,
    title: "Hard Workers",
    lorem: "rerum asperiores dolor",
  },
];

console.log(data);

const Fact = () => {
  return (
    <Container>
      <div>
        <h2>Facts</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo animi
        repellendus debitis fugit ipsum modi natus. Enim omnis aliquid hic sed,
        ex libero quibusdam soluta odio reiciendis. Asperiores, iusto eos.
      </p>
      <Box>
        {data.map((item) => {
          return (
            <div className="card">
              <div className="cardIcon">{item.icon}</div>
              <div className="cardInfo">
                <h1>{item.number}</h1>
                <h5>{item.title}</h5>
                <p>{item.lorem}</p>
              </div>
            </div>
          );
        })}
      </Box>
    </Container>
  );
};

export default Fact;

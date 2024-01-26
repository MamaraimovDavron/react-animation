import React from "react";
import styled from "styled-components";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { JackInTheBox } from "react-awesome-reveal";

const data = [
  {
    icon: <BusinessCenterIcon className="icon" />,
    title: "Lorem Ipsum",
    text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident",
  },
  {
    icon: <ReceiptIcon className="icon" />,
    title: "Dolor Sitema",
    text: "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata",
  },
  {
    icon: <SignalCellularAltIcon className="icon" />,
    title: "Sed ut perspiciatis",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    icon: <TravelExploreIcon className="icon" />,
    title: "Magni Dolores",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    icon: <WbSunnyIcon className="icon" />,
    title: "Nemo Enim",
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque",
  },
  {
    icon: <CalendarMonthIcon className="icon" />,
    title: "Eiusmod Tempor",
    text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi",
  },
];

const Container = styled.div`
  display: flex;
  height: 55vh;
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

  p {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    margin: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: auto auto auto;
    /* border: 1px solid red; */
    gap: 30px;
    margin-top: 10px;

    .item {
      display: flex;
      flex-direction: row;
      gap: 20px;
      padding: 12px 0;

      &:hover .left .icon {
        border: 1px solid #149ddd;
        color: #149ddd;
        background-color: white;
        transition: 0.4s linear;
      }
      .left {
        .icon {
          font-size: 30px;
          border: 1px solid;
          border-radius: 50%;
          padding: 8px;
          color: white;
          background-color: #149ddd;
        }
      }

      .right {
        display: flex;
        flex-direction: column;
        gap: 15px;
        h4 {
          font-size: 21px;
          padding: 0;
          margin: 0;
          font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
            "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
          &:hover {
            color: #149ddd;
            transition: 0.4s linear;
            cursor: pointer;
          }
        }

        p {
          padding: 0;
          margin: 0;
          font-size: 15px;
          font-family: Arial, Helvetica, sans-serif;
        }
      }
    }
  }
`;

const Services = () => {
  return (
    <Container>
      <div>
        <h2>Services</h2>
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
            <JackInTheBox>
              <div className="item">
                <div className="left">{item.icon}</div>
                <div className="right">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            </JackInTheBox>
          );
        })}
      </div>
    </Container>
  );
};

export default Services;

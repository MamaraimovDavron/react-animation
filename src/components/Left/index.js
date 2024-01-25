import React from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import avatar from "./avatar/1705845042297.jpg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const icons = [
  <TwitterIcon className="socialIcons" />,
  <FacebookIcon className="socialIcons" />,
  <InstagramIcon className="socialIcons" />,
  <TelegramIcon className="socialIcons" />,
  <LinkedInIcon className="socialIcons" />,
];

const muIcons = [
  <HomeOutlinedIcon />,
  <PersonOutlineOutlinedIcon />,
  <NoteOutlinedIcon />,
  <TaskOutlinedIcon />,
  <HomeRepairServiceOutlinedIcon />,
  <EmailOutlinedIcon />,
];

const menuList = [
  "Home",
  "About",
  "Resume",
  "Portfolio",
  "Services",
  "Contact",
];

const Container = styled.div`
  /* padding: 10px 0; */
  width: 16%;
  background-color: #040b14;
  height: 100vh;
  gap: 20px;
  color: white;
  position: sticky;
  top: 0;
`;

const Aside = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40%;
  img {
    width: 40%;
    border-radius: 50%;
    border: 8px solid #2c2f3f;
  }

  h3 {
    font-size: 24px;
    /* font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif; */
    font-family: "Century Gothic";
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    gap: 10px;

    li {
      padding: 8px;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #212431;
      border-radius: 50%;
      &:hover {
        background-color: #119cdd;
        transition: 0.5s linear;
      }
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        .socialIcons {
          font-size: 17px;
        }
      }
    }
  }
`;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 80%;
  height: 50%;
  /* border: 1px solid; */
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    gap: 20px;
    li {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      &:hover {
        .item {
          color: #119cdd;
        }
        .menu {
          color: white;
          transition: 0.2s linear;
        }
      }

      .item {
        /* color: #119cdd; */
        text-decoration: none;
        color: #a8a9b4;
        /* font-size: 12px; */
        /* border: 1px solid; */
      }

      .menu {
        color: #a8a9b4;
        text-decoration: none;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        font-size: 20px;
        /* &:hover {
          color: white;
          transition: 0.2s linear;
        } */
      }
    }
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  height: 20%;
  width: 80%;
`;

const Left = () => {
  return (
    <Container>
      <Aside>
        <Top>
          <img src={avatar} alt="" />
          <h3>Davron Mamaraimov</h3>
          <ul>
            {icons.map((item) => {
              return (
                <li>
                  <a href="!#">{item}</a>
                </li>
              );
            })}
          </ul>
        </Top>

        <Middle>
          <ul>
            {muIcons.map((item, index) => {
              const menu = menuList[index];
              return (
                <li>
                  <a href="!#" className="item">
                    {item}
                  </a>
                  <a href="!#" className="menu">
                    {menu}
                  </a>
                </li>
              );
            })}
          </ul>
        </Middle>

        <Footer>
          <p>
            &copy; Copyright{" "}
            <a href="https://t.me/Davron_Mamaraimov">Davron Mamaraimov</a>
          </p>
        </Footer>
      </Aside>
    </Container>
  );
};

export default Left;

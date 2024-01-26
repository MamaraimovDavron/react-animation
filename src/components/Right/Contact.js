import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import { Button } from "@mui/material";
import Rotate from "react-awesome-reveal";

const data = [
  {
    icon: <LocationOnIcon className="icon" />,
    top: "Location",
    bottom: "A108 Adam Street, New York, NY 535022",
  },
  {
    icon: <EmailIcon className="icon" />,
    top: "Email:",
    bottom: "davronmamaraimov1996@gmail.com",
  },
  {
    icon: <SmartphoneIcon className="icon" />,
    top: "Call:",
    bottom: "+99899 937 49 96",
  },
];

const Container = styled.div`
  display: flex;
  height: 95vh;
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
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    font-size: 17px;
    padding: 0;
    margin: 0;
  }

  .grid {
    display: grid;
    grid-template-columns: 40% 58%;
    justify-content: space-between;
    .item {
      padding: 20px;
      display: flex;
      flex-direction: column;
      box-shadow: 0px 0px 35px 10px #f1f1f1;
    }

    .one {
      gap: 30px;
      .top {
        display: flex;
        flex-direction: column;
        gap: 30px;
        .content {
          display: flex;
          flex-direction: row;
          gap: 15px;
          cursor: pointer;
          &:hover .left .icon {
            background-color: #149ddd;
            color: white;
            transition: 0.5s linear;
            cursor: pointer;
          }
          .left {
            .icon {
              font-size: 22px;
              padding: 10px;
              border-radius: 50%;
              color: #49aae2;
              background-color: #dff3fc;
            }
          }

          .right {
            display: flex;
            flex-direction: column;
            gap: 12px;
            * {
              margin: 0;
              padding: 0;
            }

            h3 {
              font-family: "Trebuchet MS", "Lucida Sans Unicode",
                "Lucida Grande", "Lucida Sans", Arial, sans-serif;
              font-size: 22px;
              font-weight: 600;
            }
            h4 {
              font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
                "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
              font-size: 12px;
              font-weight: 200;
            }
          }
        }
      }

      .bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }

    .two {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;

      .input {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        gap: 30px;

        .name {
          width: 50%;
          display: flex;
          flex-direction: column;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-size: 20px;
          gap: 10px;

          #name {
            padding: 15px;
            border: none;
            outline: none;
            border: 1px solid #c8c8c8;
          }
        }

        .email {
          width: 50%;
          display: flex;
          flex-direction: column;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-size: 20px;
          gap: 10px;
          #email {
            padding: 15px;
            border: none;
            outline: none;
            border: 1px solid #c8c8c8;
          }
        }
      }

      .subject {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        font-size: 20px;
        #subject {
          padding: 15px;
          border: none;
          outline: none;
          border: 1px solid #c8c8c8;
        }
      }

      .message {
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        font-size: 20px;
        #message {
          padding: 15px;
          border: none;
          outline: none;
          border: 1px solid #c8c8c8;
        }
      }
    }
  }
`;

const Contact = () => {
  return (
    <Container>
      <div>
        <h2>Contact</h2>
      </div>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="grid">
        <Rotate>
          <div className="item one">
            <div className="top">
              {data.map((item) => {
                return (
                  <div className="content">
                    <div className="left">{item.icon}</div>
                    <div className="right">
                      <h3>{item.top} </h3>
                      <h4>{item.bottom} </h4>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bottom">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.110806967714!2d69.3330895764625!3d41.32820379966358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4580b3a3217%3A0x636d14040b399cfc!2sBuyuk%20Ipak%20Yuli%20Road%20115a%2C%20100077%2C%20Tashkent%2C%20Toshkent%20Shahri%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1706249786489!5m2!1sen!2s"
                width="470"
                height="300"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Rotate>
        <Rotate duration={2000}>
          <div className="item two">
            <div className="input">
              <div className="name">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" />
              </div>

              <div className="email">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" />
              </div>
            </div>

            <div className="subject">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>

            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="14"
              ></textarea>
            </div>

            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", fontFamily: "Century Gothic" }}
            >
              Send Message
            </Button>
          </div>
        </Rotate>
      </div>
    </Container>
  );
};

export default Contact;

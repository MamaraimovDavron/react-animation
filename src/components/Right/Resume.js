import React from "react";
import styled from "styled-components";
import { Roll } from "react-awesome-reveal";

const Container = styled.div`
  display: flex;
  height: 110vh;
  flex-direction: column;
  padding: 20px 150px;
  gap: 20px;

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

  .grid {
    display: grid;
    grid-template-columns: 50% 50%;
    /* border: 1px solid red; */
    height: 100%;
    .item {
      display: flex;
      flex-direction: column;
      gap: 30px;

      h3 {
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        font-size: 28px;
        margin: 0;
      }
      .box {
        border-left: 2px solid #1f5297;
        padding: 10px;

        span {
          background-color: #e4edf9;
          padding: 5px;
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-size: 12px;
          font-weight: 600;
        }
        h4 {
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-size: 18px;
        }

        p {
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-style: italic;
        }

        ul {
          font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
            "Lucida Sans", Arial, sans-serif;
          font-size: 15px;
          li {
            padding-top: 10px;
          }
        }
      }
    }
  }
`;

const Resume = () => {
  return (
    <Container>
      <div>
        <h2>Resume</h2>
      </div>
      <div className="grid">
        <Roll>
          <div className="item">
            <h3>Summary</h3>
            <div className="box">
              <h4>Davron Mamaraimov</h4>
              <p>
                Innovative and deadline-driven Graphic Designer with 3+ years of
                experience designing and developing user-centered digital/print
                marketing material from initial concept to final, polished
                deliverable.
              </p>
              <ul>
                <li>Tashkent region, Angren city, Uzumzor street 13</li>
                <li>+99899 937 49 96</li>
                <li>davronmamaraimov1996@gmail</li>
              </ul>
            </div>
            <h3>Education</h3>

            <div className="box">
              <h4>MASTER OF FINE ARTS & GRAPHIC DESIGN</h4>
              <span>2015 - 2016</span>
              <p>Rochester Institute of Technology, Rochester, NY</p>
              <p>
                Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
                iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
                nerada porti sand markend
              </p>
            </div>

            <div className="box">
              <h4>BACHELOR OF FINE ARTS & GRAPHIC DESIGN</h4>
              <span>2010 - 2014</span>
              <p>Rochester Institute of Technology, Rochester, NY</p>
              <p>
                Quia nobis sequi est occaecati aut. Repudiandae et iusto quae
                reiciendis et quis Eius vel ratione eius unde vitae rerum
                voluptates asperiores voluptatem Earum molestiae consequatur
                neque etlon sader mart dila
              </p>
            </div>
          </div>
        </Roll>

        <Roll>
          <div className="item">
            <h3>Professional Experience</h3>
            <div className="box">
              <h4>SENIOR GRAPHIC DESIGN SPECIALIST</h4>
              <span>2019</span>
              <p>Experion, New York, NY</p>
              <ul>
                <li>
                  Lead in the design, development, and implementation of the
                  graphic, layout, and production communication materials
                </li>
                <li>
                  Delegate tasks to the 7 members of the design team and provide
                  counsel on all aspects of the project.
                </li>
                <li>
                  Supervise the assessment of all graphic materials in order to
                  ensure quality and accuracy of the design
                </li>
                <li>
                  Oversee the efficient use of production project budgets
                  ranging from $2,000 - $25,000
                </li>
              </ul>
            </div>

            <h3>Education</h3>
            <div className="box">
              <h4>GRAPHIC DESIGN SPECIALIST</h4>
              <span>2017-2018</span>
              <p>Stepping Stone Advertising, New York, NY</p>
              <ul>
                <li>
                  Developed numerous marketing programs (logos,
                  brochures,infographics, presentations, and advertisements).
                </li>
                <li>
                  Managed up to 5 projects or tasks at a given time while under
                  pressure
                </li>
                <li>
                  Recommended and consulted with clients on the most appropriate
                  graphic design
                </li>
                <li>
                  Created 4+ design presentations and proposals a month for
                  clients and account managers
                </li>
              </ul>
            </div>
          </div>
        </Roll>
      </div>
    </Container>
  );
};

export default Resume;

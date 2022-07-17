import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import bitcoin from "../assets/img/bitcoin.jpg";
import car from "../assets/img/car.png";
import garden from "../assets/img/garden.jpg";
import food from "../assets/img/food.png";
import netflix from "../assets/img/Netflix clone.png";
import weather from "../assets/img/weather.png";
import handwritten from "../assets/img/handwritten.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import graphic1 from "../assets/img/graphic1.jpeg";
import graphic2 from "../assets/img/graphic2.jpeg";
import graphic3 from "../assets/img/graphic3.jpeg";
import graphic4 from "../assets/img/Graphic4.jpeg";
import graphic5 from "../assets/img/Graphic5.jpeg";
import graphic6 from "../assets/img/graphic6.jpeg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Travel Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Design and Content Services Website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Food Price Predictor",
      description: "Machine Learning",
      imgUrl: food,
    },
    {
      title: "Netflix Clone",
      description: "MERN Stack Development",
      imgUrl: netflix,
    },
    {
      title: "Weather App",
      description: "Design & Development",
      imgUrl: weather,
    },
    {
      title: "BitCoin Price Prediction",
      description: "Machin Learning",
      imgUrl: bitcoin,
    },
    {
      title: "Handwritten Digit Recognition System",
      description: "Machine Learning",
      imgUrl: handwritten,
    },
    {
      title: "iris Flower Type Recognition",
      description: "Machine Learning",
      imgUrl: garden,
    },
    {
      title: "Car Price Predictor",
      description: "Machine Learning",
      imgUrl: car,
    },
    {
      title: "Food Price Predictor",
      description: "Machine Learning",
      imgUrl: food,
    },

    {
      title: "Illustration",
      description: "Graphic Design",
      imgUrl: graphic1,
    },
    {
      title: "Illustration",
      description: "Graphic Design",
      imgUrl: graphic2,
    },
    {
      title: "Illustration",
      description: "Graphic Design",
      imgUrl: graphic3,
    },
    {
      title: "Illustration",
      description: "Graphic Design",
      imgUrl: graphic4,
    },
    {
      title: "Illustration",
      description: "Graphic Design",
      imgUrl: graphic5,
    },
    {
      title: "Illustration",
      description: "Graphic Design",
      imgUrl: graphic6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    The projects I have worked on while my journey to discover
                    myself.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              index < 6 && (
                                <ProjectCard key={index} {...project} />
                              )
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              index > 5 &&
                              index < 11 && (
                                <ProjectCard key={index} {...project} />
                              )
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              index > 10 && (
                                <ProjectCard key={index} {...project} />
                              )
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

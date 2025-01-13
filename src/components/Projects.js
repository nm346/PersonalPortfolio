import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img3.png";

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const projectGroups = [
    {
      title: "Special Project 1",
      description: "This is a highlighted project showcasing unique design and development capabilities. Click below to learn more about it.",
      buttonText: "Learn More",
      images: [projImg1, projImg2, projImg3, projImg4],
    },
    {
      title: "Special Project 2",
      description: "Another unique project with a focus on cutting-edge technologies. Discover the features and innovations behind this work.",
      buttonText: "Explore More",
      images: [projImg3, projImg4, projImg1, projImg2],
    },
    {
      title: "Special Project 3",
      description: "A groundbreaking project that explores new horizons in technology and design. See how it makes a difference.",
      buttonText: "Check it Out",
      images: [projImg2, projImg3, projImg4, projImg1],
    },
  ];

  const currentGroup = projectGroups[currentPage - 1];

  return (
    <section className="project" id="projects">
      <Container>
        {/* Title */}
        <Row>
          <Col size={12}>
            <h1 className="text-center">Projects</h1>
          </Col>
        </Row>
        {/* Description */}
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <p>
              Explore the projects I've worked on during my journey as a developer. 
              These range from business applications to unique startup designs.
            </p>
          </Col>
        </Row>
        {/* Navigation Bar */}
        <Row className="justify-content-center mb-4">          
          
          <div className="nav-buttons">
          <Col md={2} className="text-center">

            <Button
              className={`project-nav-btn ${currentPage === 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(1)}
            >
              Button 1
            </Button>
          </Col>
          <Col md={2} className="text-center">
            <Button
              className={`project-nav-btn ${currentPage === 2 ? "active" : ""}`}
              onClick={() => setCurrentPage(2)}
            >
              Button 2
            </Button>
          </Col>
          <Col md={2} className="text-center">
            <Button
              className={`project-nav-btn ${currentPage === 3 ? "active" : ""}`}
              onClick={() => setCurrentPage(3)}
            >
              Button 3
            </Button> 
          </Col></div>
        </Row>           

        {/* Project Group */}
        <Row>
          <Col md={4} className="project-highlight">
            <h2>{currentGroup.title}</h2>
            <p>{currentGroup.description}</p>
            <Button className="learn-more-btn">{currentGroup.buttonText}</Button>
          </Col>
          <Col md={8}>
            <Row>
              {currentGroup.images.map((image, index) => (
                <Col md={6} key={index}>
                  <div className="proj-imgbx">
                    <img src={image} alt={`Project ${index + 1}`} />
                    <div className="proj-txtx">
                      <h4>Project {index + 1}</h4>
                      <p>Description {index + 1}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img3.png";
import kumiteImg1 from "../assets/img/kumiteImg1.png";
import kumiteImg2 from "../assets/img/kumiteImg2.png";
import kumiteImg3 from "../assets/img/kumiteImg3.png";
import kumiteImg4 from "../assets/img/kumiteImg4.png";
import doc1 from "../assets/documents/KumiteGameDoc.pdf";


export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const projectGroups = [
    {
      title: "C# Unity Android/iOS Game",
      description: `iOS and Android Unity Game Engine project
      written entirely in C#
      Download links available in the Github readme.
      Full documentation on the project download button is below.`
      ,
      buttonText: "View source code on Github",
      buttonLink: "https://github.com/nm346/KumitePersonalProject",
      buttonLink2: doc1,
      images: [kumiteImg1, kumiteImg2, kumiteImg3, kumiteImg4],
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
          <p style={{ backgroundColor: "black", color: "white", padding: "10px" }}>
  This website is one of my personal projects that I created with React but please feel free to explore some of my other projects that I work on in my spare time as a software engineer.
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
                C# Mobile Application
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
            <Button
              className="learn-more-btn"
              href={currentGroup.buttonLink}
              target="_blank"
              rel="noopener noreferrer" 
            >
              {currentGroup.buttonText}
            </Button>
            <Button
              className="download-docs-btn"
              href={currentGroup.buttonLink2} // Replace with the actual path to your file
              download="NathanProjectDoc.pdf" // Optional: Sets the downloaded file name
            >
              Download Docs
            </Button>
          </Col>

          <Col md={8}>
            <Row>
              {currentGroup.images.map((image, index) => (
                <Col md={6} key={index}>
                  <div className="proj-imgbx">
                    <img src={image} alt={`Project ${index + 1}`} />
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
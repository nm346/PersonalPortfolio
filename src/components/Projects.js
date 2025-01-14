import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import kumiteImg1 from "../assets/img/kumiteImg1.png";
import kumiteImg2 from "../assets/img/kumiteImg2.png";
import kumiteImg3 from "../assets/img/kumiteImg3.png";
import kumiteImg4 from "../assets/img/kumiteImg4.png";
import medicImg1 from "../assets/img/medicImg1.png";
import medicImg2 from "../assets/img/medicImg2.png";
import medicImg3 from "../assets/img/medicImg3.png";
import medicImg4 from "../assets/img/medicImg4.png";
import coremicroserviceImg1 from "../assets/img/coremicroserviceImg1.png";
import coremicroserviceImg2 from "../assets/img/coremicroserviceImg2.png";
import coremicroserviceImg3 from "../assets/img/coremicroserviceImg3.png";
import coremicroserviceImg4 from "../assets/img/coremicroserviceImg4.png";
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
      title: "iOS Swift Medicine Reminder and Information Application",
      description: `Swift Project to help patients manage their medication. 
It sends reminders for doses, provides details about the medicine, and allows users to track multiple medications.`,
      buttonText: "View source code on Github",
      buttonLink: "https://github.com/nm346/iOS_KonzoAPP",
      images: [medicImg1, medicImg2, medicImg3, medicImg4],
    },
    {
      title: ".NET Core Microservices Project",
      description: `I am developing a project focusing on Microservices architecture with .NET Core MVC(.NET 8),
Entity Framework Core, SQL and .NET Identity with Azure Service Bus.
Project is private on GitHub but will be public soon.`,
buttonText: "Source code on Github [TBD]",      
images: [coremicroserviceImg1, coremicroserviceImg2, coremicroserviceImg3, coremicroserviceImg4],
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
                iOS Swift Application
              </Button>
            </Col>
            <Col md={2} className="text-center">
              <Button
                className={`project-nav-btn ${currentPage === 3 ? "active" : ""}`}
                onClick={() => setCurrentPage(3)}
              >
               .NET Core Project
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
import React from 'react';
import universityLogo from '../assets/img/uollogo.png';
import freemarketLogo from '../assets/img/freemarketfxlogo.png';
import forestersLogo from '../assets/img/foresterslogo.png';
import capgeminiLogo from '../assets/img/CapgeminiLogo.png';

export const Experience = () => {
  return (
    <section className="experience" id="experience">
    <div className="experience-section">
      <h2>Work Experience</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3><img src={freemarketLogo} alt="freemarket logo" className="logo" />Freemarket - Software Developer / Dev in Test (2022 -)</h3>
          <p>
            Creating and working on .Net Frameworks<br />
            Collaborating with devs to develop C# Microservices<br />
            Managing and querying relational databases with SQL<br />
            Writing and testing UI and APIs<br />
            Selenium and Microsoft Playwright<br />
            Specflow / Cucumber<br />
            Microsoft Azure<br />
            JavaScript/TypeScript
          </p>
        </div>
        <div className="experience-item">
          <h3><img src={forestersLogo} alt="Foresters logo" className="logo" />Foresters Financial - Automation Test Analyst / SDET (2021 - 2022)</h3>
          <p>
            Creating and working on .Net Frameworks<br />
            Collaborating with devs to develop C# Microservices<br />
            Testing APIs and UI with Selenium, Java, Cucumber<br />
            Microsoft Azure<br />
            Managing and querying relational databases with SQL
          </p>
        </div>
        <div className="experience-item">
          <h3><img src={capgeminiLogo} alt="capgemini logo" className="logo" /> Capgemini - Software Test Analyst (2018 - 2021)</h3>
          <p>
            Functional testing with Selenium using JavaScript, Java, and C#<br />
            Web development with SQL, NodeJS, MVC framework, and Java<br />
            Performance testing with Apache JMeter and HP LoadRunner<br />
            Project management using Jira and Confluence
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export const Education = () => {
  return (
    <section className="education" id="education">
    <div className="experience-section">
      <h2>Education</h2>
      <div className="experience-list">
        <div className="experience-item">
          <h3><img src={universityLogo} alt="University logo" className="logo" /> University of Leicester (2015 - 2018)<br /></h3>
          <p>
            Bachelor of Science in Computing (Computer Science)<br />
            Grade: 2.1 <br />
            Chancellor’s Scholarship
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

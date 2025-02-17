import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Throughout my career, I’ve gained expertise in software development and testing with C#, Java, SQL, JavaScript, and TypeScript, along with tools like Microsoft Azure, Octopus Deploy, and Datadog. <br></br>I’m skilled in building C# microservices, .NET frameworks, and UI/API testing with Playwright, Cypress, and Selenium. <br></br>These technical skills reflect years of hands-on experience, learning, and collaboration</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="API/UIImage" />
                                <h5>Automation API/UI Testing</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="BackendImage" />
                                <h5>Backend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="FrontendImage" />
                                <h5>Frontend Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="CriticalImage" />
                                <h5>Critical Thinking</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="ProblemImage" />
                                <h5>Problem Solving</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import cv from "../assets/documents/Nathan_Mayifuila_CV.docx";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send Messaage');
    const [downloadButtonText, setDownloadButtonText] = useState('Download My CV'); // New state
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            setStatus({ success: true, message: 'Message sent successfully' });
        } else {
            setStatus({ success: false, message: 'Something went wrong, please try again later or download my cv below which has my contact details.' });
        }
    };

    const handleDownload = () => {
        setDownloadButtonText("Downloading CV");
        // Simulate download delay
        setTimeout(() => {
            setDownloadButtonText("Download My CV");
        }, 2000);

        // Trigger file download
        const link = document.createElement("a");
        link.href = cv; // Replace with the correct path to your .docx file
        link.download = "NathanMayifuila_CV.docx"; // Replace with the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                            </Col>
                                            <Col size={12} sm={6} className="px-1">
                                                <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                            </Col>
                                            <Col size={12} className="px-1">
                                                <textarea
                                                    rows="6"
                                                    value={formDetails.message}
                                                    placeholder="Message"
                                                    onChange={(e) => onFormUpdate('message', e.target.value)}
                                                ></textarea>
                                                <button type="submit">
                                                    <span>{buttonText}</span>
                                                </button>
                                                {/* Add a new div or margin for spacing */}
                                                <div style={{ marginTop: "1px" }}></div>
                                                <button type="button" onClick={handleDownload}>
                                                    <span>{downloadButtonText}</span>
                                                </button>
                                            </Col>
                                            {
                                                status.message &&
                                                <Col>
                                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                                </Col>
                                            }
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faLinkedinIn, faGoogle } from "@fortawesome/free-brands-svg-icons";
import './AboutMyself.css';

export default function AboutMyself() {

    return (
        <Container className="vh-100 d-flex flex-column justify-content-center">
              <Row className="mb-5">
                <Col xs={12}>
                  <h1>Nahid Hossain</h1>
                  <p1>Dhaka, Bangladesh <span className="d-inline-block">·</span> <a href="drmc.nahid@gmail.com">drmc.nahid@gmail.com</a></p1>
                </Col>
              </Row>
              <Row>                
                <Col>
                <p>
                Nahid has over 4 years of experience in the software industry. During his university years, he was an active competitive programmer and represented his university in more than 20 programming contests. He has solved over 3000 algorithm and data structure problems, showcasing his strong problem-solving skills. Passionate about exploring new technologies, Nahid constantly seeks out new challenges. The value he brings to any organization lies in his well-rounded skill set, developed through both academic achievements and professional experience.
                </p>
                </Col>
              </Row>
              <Row>
                <Col className="pt-4">
                <a href="https://www.facebook.com/nahidhossain"><FontAwesomeIcon icon={faFacebookF} className="icon-style" /></a>
                <a href="https://github.com/nahid08"><FontAwesomeIcon icon={faGithub} className="icon-style"/></a>
                <a href="https://www.linkedin.com/in/nahid-hossain-325257177/"><FontAwesomeIcon icon={faLinkedinIn} className="icon-style"/></a>
                <FontAwesomeIcon icon={faGoogle} className="icon-style" />
                </Col>
              </Row>
            </Container>
    )
}
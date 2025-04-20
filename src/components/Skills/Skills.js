import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJava, faJs, faAngular, faSourcetree, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import './Skills.css';

let programmingLanguage = ["Java", "Javascript", "TypeScript", "C++", "HTML", "CSS", "Python"]
let frameWork = ["AngularJS", "Angular", "Spring", "Langchain"]


export default function Skills() {

    return (
        <Container className="min-vh-100 mobile-padding d-flex flex-column justify-content-md-center">
            <Row>
                <Col>
                 <h3 className="custom-underline"> SKILLS</h3>
                </Col>
            </Row>

            <Row>
                <Col className="mb-4 mt-4">
                Programming Languages & Tools
                </Col>
            </Row>

            <Row>
                <Col className="mb-3">
                <FontAwesomeIcon icon={faPython} className="tool-icon-style" title="Python"/>
                <FontAwesomeIcon icon={faJava} className="tool-icon-style" title="Java"/>
                <FontAwesomeIcon icon={faJs} className="tool-icon-style" title="Javascript"/>
                <FontAwesomeIcon icon={faAngular} className="tool-icon-style" title="Angular"/>
                <FontAwesomeIcon icon={faHtml5} className="tool-icon-style" title="HTML"/>
                <FontAwesomeIcon icon={faSourcetree} className="tool-icon-style" title="Sourcetree"/>
                </Col>
            </Row>

            <Row>
                <Col xs={6} md={3}>
                <p>Programming Language</p>
                <ul className="horizontal-list">
                   {programmingLanguage.map((lang) => (
                    <li>✔ {lang}</li>
                   ))}
                </ul>
                </Col>

                <Col>
                <p>Frameworks</p>
                <ul className="horizontal-list">
                {frameWork.map((lang) => (
                    <li>✔ {lang}</li>
                   ))}
                </ul>
                </Col>
            </Row>

            <Row>
               
            </Row>
        </Container>
    )

}
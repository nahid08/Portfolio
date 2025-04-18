import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython, faJava, faJs, faAngular, faSourcetree, faHtml5 } from "@fortawesome/free-brands-svg-icons";
import './Skills.css';

export default function Skills() {

    return (
        <Container className="vh-100 d-flex flex-column justify-content-center">
            <Row>
                <Col>
                 <h1 className="custom-underline"> SKILLS</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                Programming Languages & Tools
                </Col>
            </Row>

            <Row>
                <Col>
                <FontAwesomeIcon icon={faPython} className="tool-icon-style" title="Python"/>
                <FontAwesomeIcon icon={faJava} className="tool-icon-style" title="Java"/>
                <FontAwesomeIcon icon={faJs} className="tool-icon-style" title="Javascript"/>
                <FontAwesomeIcon icon={faAngular} className="tool-icon-style" title="Angular"/>
                <FontAwesomeIcon icon={faHtml5} className="tool-icon-style" title="HTML"/>
                <FontAwesomeIcon icon={faSourcetree} className="tool-icon-style" title="Sourcetree"/>
                </Col>
            </Row>

            <Row>
                <Col>
                <p>Programming Language</p>
                <ul className="horizontal-list">
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>C++</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>TypeScript</li>
                </ul>
                </Col>
            </Row>

            <Row>
                <Col>
                <p>Frameworks</p>
                <ul className="horizontal-list">
                    <li>AngularJS</li>
                    <li>Angular</li>
                    <li>Spring</li>
                </ul>
                </Col>
            </Row>
        </Container>
    )

}
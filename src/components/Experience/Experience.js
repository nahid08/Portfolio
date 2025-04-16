import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import './Experience.css';

export default function Experience() {

    return(
        <Container>
            <Row>
                <Col>
                <h1 className="mb-5 custom-underline">Experience</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                <h2>Senior Software Engineer</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                 <h3>Enosis Solutions (15 March, 2021)</h3>
                </Col>
            </Row>

            <Row>
                <Col>
                <ul>
                    <li> Built functional components with react-redux.</li>
                    <li>Implemented REST api using express js and spring boot.</li>
                    <li>Responsible for developing and fixing bugs in Java Spring.</li>
                    <li>Implemented algorithm, data structures and design patterns to solve complex problems and refactoring code to maintain codebase.</li>
                    <li>Added new features to AngularJS components.</li>
                    <li> Converted AngularJS components to Angular 13.</li>
                    <li> Wrote database scripts both in SQL server and Oracle.</li>
                    <li> Participated in agile development process.</li>
                </ul>
                </Col>
            </Row>
        </Container>
    )

}
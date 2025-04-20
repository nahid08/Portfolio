import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import './Experience.css';

let experienceList = [
    "Built functional components with react-redux", 
    "Implemented REST api using express js and spring boot.",
    "Responsible for developing and fixing bugs in Java Spring.", 
    "Implemented algorithm, data structures and design patterns to solve complex problems and refactoring code to maintain codebase.",
    "Added new features to AngularJS components.", 
    "Converted AngularJS components to Angular 13.", 
    "Wrote database scripts both in SQL server and Oracle.",
    "Participated in agile development process."
]

export default function Experience() {



    return(
        <Container className="min-vh-100 mobile-padding d-flex flex-column justify-content-md-center">
            <Row>
                <Col>
                <h1 className="mb-5 custom-underline">Experience</h1>
                </Col>
            </Row>

            <Row>
                <Col xs={12} className="d-flex justify-content-between">
                <h2>Senior Software Engineer</h2>
                <p className="fs-5">15 March, 2021 - Present</p>
                </Col>

            </Row>

            <Row>
                <Col>
                 <h3 className="custom-underline">Enosis Solutions</h3>
                </Col>
            </Row>

            <Row>
                <Col>
                <ul className="list-style">
                {experienceList.map((exp) => (
                <li  className="mb-2">💻 {exp}</li>
                 ))}
                </ul>
                </Col>
            </Row>
        </Container>
    )

}
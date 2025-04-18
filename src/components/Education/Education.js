import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import './Education.css';
export default function Education() {
    return (
        <Container className="vh-100 d-flex flex-column justify-content-center">
            <Row>
                <Col>
                <h1 className="custom-underline">Education</h1>
                </Col>
            </Row>

            <Row>
                <Col>
                <h2>Jahangirnagar University</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                 <p>Bachelor of Science</p>
                 <p>Computer Science and Engineering</p>
                 <p>GPA: 3.30</p>
                </Col>
            </Row>

            <Row>
                <Col>
                <p> Dhaka Residential Model School & College</p>
                <p>Higher Secondary Certificate</p>
                <p>GPA: 5.00</p>
                </Col>
            </Row>

            <Row>
                <Col>
                <p> Dhaka Residential Model School & College</p>
                <p>Secondary School Certificate</p>
                <p>GPA: 5.00</p>
                </Col>
            </Row>
        </Container>
    )
}
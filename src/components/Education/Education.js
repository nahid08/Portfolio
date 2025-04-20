import {  Container, Col, Row, Card, Image } from "react-bootstrap";
import "./Education.css";
import jahangirnagar from '../../assets/images/jahangirnagar_logo1.png';
import drmc from '../../assets/images/drmc.png';
export default function Education() {
  return (
    <Container className="min-vh-100 mobile-padding d-flex flex-column justify-content-md-center">
      <Row>
        <Col>
          <h1 className="custom-underline">Education</h1>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col xs={12} md={12} lg={6}>
          <Card className="card-style">
            <Card.Body className="d-flex">
                 <Image src={jahangirnagar}  fluid className="card-image-style"></Image>
                 <div className="container">
                    <h2 className="m-0">Jahangirnagar University</h2>
                    <p className="m-0">Bachelor of Science</p>
                    <p className="m-0">Computer Science and Engineering</p>
                    <p>GPA: 3.30</p>
                 </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col xs={12} md={12} lg={6}>
          <Card className="card-style">
            <Card.Body className="d-flex">
                 <Image src={drmc}  fluid className="card-image-style"></Image>
                 <div className="container">
                    <h2 className="m-0">Dhaka Residential Model School & College</h2>
                    <p className="m-0">Higher Secondary Certificate</p>
                    <p className="m-0">Computer Science and Engineering</p>
                    <p>GPA: 5.00</p>
                 </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col xs={12} md={12} lg={6}>
          <Card className="card-style">
            <Card.Body className="d-flex">
                 <Image src={drmc}  fluid className="card-image-style"></Image>
                 <div className="container">
                    <h2 className="m-0">Dhaka Residential Model School & College</h2>
                    <p className="m-0">Secondary School Certificate</p>
                    <p className="m-0">Computer Science and Engineering</p>
                    <p>GPA: 5.00</p>
                 </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

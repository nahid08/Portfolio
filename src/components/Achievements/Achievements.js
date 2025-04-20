import { Navbar, Container, Nav, Col, Row } from "react-bootstrap";
import './Achievements.css';
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icpc2019 from '../../assets/files/ACM-ICPC-2019.pdf';
import asiaWest from '../../assets/files/ASIA-WEST.pdf';
import icpc2021 from '../../assets/files/ACM-ICPC-2021.pdf';

export default function Achievements() {
    return (
        <Container className="min-vh-100 mobile-padding d-flex flex-column justify-content-md-center">
         <Row>
            <Col>
            <h3 className="custom-underline">ACHIEVEMENTS</h3>
            </Col>
         </Row>

         <Row className="mt-4">
            <Col>
            <ul className="achievements-list-style">
                <li><FontAwesomeIcon icon={faTrophy} className="me-2"/>Ranked 8th among 150 teams in National Collegiate Programming Contest 2020, Dhaka, Bangladesh. 
                </li>
                <li><FontAwesomeIcon icon={faTrophy} className="me-2"/>Ranked 19th among 188 teams in ICPC 2019, Dhaka, Bangladesh.
                <a href={icpc2019} target="_blank" rel="noopener noreferrer" className="ps-2">Certificate</a></li>
                <li><FontAwesomeIcon icon={faTrophy} className="me-2"/>Ranked 19th among 110 teams in ICPC 2019, Dhaka, Bangladesh.
                <a href={icpc2021} target="_blank" rel="noopener noreferrer" className="ps-2">Certificate</a></li>
                <li><FontAwesomeIcon icon={faTrophy} className="me-2"/>Qualified in Asia-west regional ICPC final contest 2019, India.
                <a href={asiaWest} target="_blank" rel="noopener noreferrer" className="ps-2">Certificate</a></li>
                <li><FontAwesomeIcon icon={faTrophy} className="me-2"/>Ranked 1st in home country Bangladesh and 36th among 8000 contestants in Codeforces Round 544</li>
                <li><FontAwesomeIcon icon={faTrophy} className="me-2"/>Ranked 1st in home country Bangladesh and 7th among 600 users in Codechef March Cook-Off 2019 Division 2</li>
            </ul>
            </Col>
         </Row>
        </Container>
    )
}
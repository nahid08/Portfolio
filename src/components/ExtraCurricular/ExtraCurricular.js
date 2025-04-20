import { Container, Col, Row, Card, Image } from "react-bootstrap";
import codeforce from '../../assets/images/codeforces.png';
import codechef from '../../assets/images/codechef.png';
import leetcode from '../../assets/images/leetcode.png';
import images from '../../assets/images/images.png';

export default function ExtraCurricular() {
  return (
    <Container className="min-vh-100 mobile-padding d-flex flex-column justify-content-md-center">

      <Row>
        <Col>
        <h3 className="custom-underline">COMPETITIVE PROGRAMMING</h3>
        </Col>
      </Row>

      <Row>
        <Col>
        <p>During my university years, I was deeply passionate about problem-solving. I solved over 2,000 problems across various online programming platforms. 
          Additionally, I took part in more than 200 online contests and participated in over 15 onsite programming competitions. Even though I've completed my studies, I always try to solve problems whenever I get the chance." </p>
        </Col>
      </Row>

      <Row>
        <Col>
        <h5>Online Programming Contest</h5>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={6} className="mt-2">
        <Card className="card-style">
            <Card.Body className="d-flex">
                 <Image src={codeforce}  fluid className="card-image-style"></Image>
                 <div className="container">
                    <h5 className="m-0">CODEFORCES</h5>
                    <p className="m-0">HANDLE: nahid08</p>
                    <p className="m-0">MAX RATING: 1961</p>
                    <a href="https://codeforces.com/profile/nahid08" className="text-break">https://codeforces.com/profile/nahid08</a>
                </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} className="mt-2">
        <Card className="card-style">
            <Card.Body className="d-flex">
                 <Image src={codechef}  fluid className="card-image-style"></Image>
                 <div className="container">
                    <h5 className="m-0">CODECHEF</h5>
                    <p className="m-0">HANDLE: nahid_08</p>
                    <p className="m-0">MAX RATING: 2211</p>
                    <a href="https://www.codechef.com/users/nahid_08" className="text-break">https://www.codechef.com/users/nahid_08</a>
                </div>
            </Card.Body>
          </Card>
        </Col>

        
        <Col xs={12} md={6} className="mt-2">
        <Card className="card-style">
            <Card.Body className="d-flex">
                 <Image src={leetcode}  fluid className="card-image-style"></Image>
                 <div className="container">
                    <h5 className="m-0">LEETCODE</h5>
                    <p className="m-0">HANDLE: NAHID HOSSAIN</p>
                    <p className="m-0">PROBLEM SOLVED: 639</p>
                    <a href="https://leetcode.com/u/user9469Rg/" className="text-break">https://leetcode.com/u/user9469Rg/</a>
                </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} className="mt-2">
        <Card className="card-style">
            <Card.Body className="d-flex">
                 <Image src={images}  fluid className="card-image-style"></Image>
                 <div className="container">
                    <h5 className="m-0">UHUNT ONLINE JUDGE</h5>
                    <p className="m-0">HANDLE: nahid_08</p>
                    <p className="m-0">PROBLEM SOLVED: 279</p>
                    <a href="https://uhunt.onlinejudge.org/id/849678">https://uhunt.onlinejudge.org/id/849678</a>
                </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

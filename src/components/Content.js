import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import pic from "../assets/headshot.jpg";
import "./Content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Content = () => {
  return (
    <Container className="mt-4">
      <Row xs={1} md={2}>
        <Col className="d-flex justify-content-center">
          <img
            src={pic}
            responsive
            alt="headshot"
            className="rounded-circle w-50 h-100"
          />
        </Col>
        <Col className="bg-gradient-primary rounded">
          <h1>Welcome!</h1>
          <p className="">
            My name is Thomas Levine, and I love to learn how things work. I
            earned a Bachelor of Arts in Music from Virginia Commonwealth
            University with a Minor in Computer Science.
          </p>
          <br></br>
        </Col>
      </Row>
      <hr></hr>
      <Row>
        <Col d-flex justify-content-center>
          <h4 className="text-center">Lets connect!</h4>
          <div className="d-flex justify-content-center mt-2">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;

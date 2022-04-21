import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import pic from "../assets/headshot.jpg";
import "./Content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Content = () => {
  return (
    <Container className="mt-4">
      <Row xs={1} lg={2}>
        <Col className="d-flex justify-content-center">
          <img
            src={pic}
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
      <Row id="about" className="w-75 mx-auto">
        <h1>About me</h1>
        <p>
          I am currently a Programmer Analyst at CGI Federal, where I work to support
          the Department of State Joint Financial Management System. I work intesively with
          distributed systems, workload management software such as BMC Control-M, Oracle Products
          such as J2EE, WebLogic, Oracle SQL (PL/SQL), and shell scripting in CMD and Bash. While working
          here, I have gained a deeper understanding of the paradigms and architectures that underpin
          major enterprise applications. I have also been deeply ingrained in the Agile Methodology, and
          the Testing and Maintenance phases of the Software Development Life Cycle.
        </p>
        <p>
          While at CGI, I have also spent my time developing an internal full stack application
          titled the <em>Devnet Info Page</em> which is a refreshed version of a .NET application. 
          The website services nearly 100 members, and is designed to provide environment and server
          information within out internal networks, allowing real-time updates on services and providing
          a convenient location to store all relevant information. We used Angular JS, Express, Node, and Oracle
          DB for the application stack, which was in itself an obstacle to create new organizational and functional
          patterns from the old architecture. I greatly enjoy working on projects that directly service individuals, and
          where I can observe the impact on others workflows.
        </p>
        <p>
          Outside of work, I like to work on projects that connect to my interests and also enhance my skills. I recently
          worked on an application named <a href="www.tiktokvralchecker.com"><em>Tiktok Viral Checker</em></a> which I 
          built to check if a given song is viral on Tiktok, since I don't use Tiktok myself. I also love to make Music
          and see live music. I play 5 instruments, but most regularly play guitar.
        </p>
      </Row>
      <Row id="projects" className="w-75 mx-auto">
        <h1>Projects</h1>
        <div>
          <h3>Tiktok Viral Checker</h3>
        </div>
        <h3>Fantasy Football Twitter Bot</h3>
        <h3>Discord Dinosaur Bot</h3>
        <Col className="text-center">a</Col>
        <Col className="text-center">b</Col>
        <Col className="text-center">C</Col>
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

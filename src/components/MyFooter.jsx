import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const MyFooter = () => {
  const today = new Date();
  return (
    <footer className="bg-primary fixed-bottom">
      <Container>
        <Row>
          <Col xs={3}>
            <Nav>
              <Nav.Item>
                <Nav.Link className="text-light">Contacts</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col xs={3}>
            <Nav>
              <Nav.Item>
                <Nav.Link className="text-light">Plans</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col xs={3}>
            <Nav>
              <Nav.Item>
                <Nav.Link className="text-light">Cookie Preferences</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col xs={3}>
            <Nav>
              <Nav.Item>
                <Nav.Link className="text-light">Terms Of Use</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav.Item className="m-1 ">
              <Nav.Link className="text-light text-center">
                © 2000-{today.getFullYear()} The WeatherChannel Inc
              </Nav.Link>
            </Nav.Item>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;

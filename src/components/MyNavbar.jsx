import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar expand="md" className="navbar-dark bg-primary sticky-top">
      <Navbar.Brand className="m-3">
        <img src="/assets/images/logo.png" alt="logo The Weather Channel" id="logo" />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="me-auto mb-2 mb-lg-0">
          <Nav.Item>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/favourites" className="nav-link">
              Favourites
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default MyNavbar;

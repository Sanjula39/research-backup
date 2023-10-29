
import React from "react";

// reactstrap components
import { Container, Nav } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()}

        </div>
      </Container>
    </footer>
  );
}

export default Footer;

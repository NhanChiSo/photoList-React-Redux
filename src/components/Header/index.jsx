import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            {/* target="_blank" chuyển link sang tab mới
                cần có rel="noopener noreferrer" theo cùng */}
            <Link
              className="header__link header__title"
              to="/photos"
            >
              Photo List
            </Link>
          </Col>
          <Col xs="auto">
            {/* NavLink dùng chuyển hướng trong app, 
                a chuyển hướng web khác.
                activeClass sẽ dùng khi link đc active */}
            <NavLink
              exact
              className="header__link"
              to="/sign-in"
              activeClassName="header__link--active"
            >
              Sign Out
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;

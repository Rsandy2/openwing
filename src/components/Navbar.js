import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Navbar() {
  return (
    //   <nav className="navbar">
    //     <ul className="navbar__container">
    //       <Link to="/" className="navbar__logo">
    //         {/* {props.children} */}
    //         OpenNews
    //       </Link>
    //     </ul>
    //   </nav>
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">TEST</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">TEST</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">TEST</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;

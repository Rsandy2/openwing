import React from 'react';
import './Navbar.css';


function Navbar(props) {
    return (
      <nav className="navbar">
        <ul className="navbar__nav">
           { props.children }
        </ul>
      </nav>
    );
  }

  function NavItem(props) {
      return (
          <li className="nav__item">
              <a href="#" className="nav__item__text">
                  <span>{props.item_text}</span>
              </a>
          </li>
      );
  }

  export {
      Navbar,
      NavItem
  }
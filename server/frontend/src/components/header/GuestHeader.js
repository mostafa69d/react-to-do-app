import React, { Component } from "react";
import { Link } from "react-router-dom";
import FaAlignJustify from "react-icons/lib/fa/align-justify";
import '../../stylesheets/header.css';
class GuestHeader extends Component {
  render() {
    return( 
            <nav className="header">
                <div className="nav-wrapper">
                <a to="/" className="brand-logo">
                    Do
                </a>
                  <ul className="right">
                      <li>
                      <Link to="/login" className="header__item">
                          Log In
                      </Link>
                      </li>
                      <li>
                      <Link to="/signup" className="header__item--signUp">
                      Sign Up
                      </Link>
                      </li>
                  </ul>
                </div>
            </nav>
    )
  }
}

export default GuestHeader;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Link extends Component {
  render() {
    const { text, to, exact } = this.props;

    return (
      <li className="nav-item">
        <NavLink className="nav-item nav-link" exact={exact} to={to}>
          {text}
        </NavLink>
      </li>
    );
  }
}

export default Link;

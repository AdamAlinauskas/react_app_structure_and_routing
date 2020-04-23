import React, { Component } from "react";
import MyLink from "./MyLink";

class NavBar extends Component {
  state = {
    menuItems: [
      { title: "Home", to: "/", exact: true },
      { title: "About us", to: "/about", exact: false },
      { title: "Car", to: "/Cars", exact: false },
      { title: "Movies", to: "/Movies", exact: false },
    ],
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {this.state.menuItems.map((menuItem) => (
              <MyLink
                text={menuItem.title}
                to={menuItem.to}
                exact={menuItem.exact}
              />
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;

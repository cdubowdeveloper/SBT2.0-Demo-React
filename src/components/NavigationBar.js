import React, { Component } from "react";
import "../styles/NavigationBar.css";
import logo from "../assets/sbt300.png";

class Navbar extends Component {
  state = { clicked: false };

  render() {
    return (
      <div>
        <nav className="NavBar">
          <a href={"/"}>
            <img className="logo" src={logo} />
          </a>

          <div className="NavBar-Expanded">
            <ul className="NavBar-Nav mr-auto">
              <a className="NavBarItem" href={"/inbox"}>
                Inbox
              </a>
              <a
                className="NavBarItem"
                href={"https://github.com/cdubowdeveloper/SBT2.0-Demo-React"}
              >
                Source Code
              </a>
              <a
                className="NavBarItem"
                href={
                  "https://developers.solutionsbytext.com/docs/t2c2.0mfe/storybook-static/index.html?path=/story/t2c-2-0--inbox"
                }
              >
                Storybooks
              </a>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

import React from "react";
import { connect } from "react-redux";

const Header = (props) => {
  const renderNavButtons = () => {
    switch (props.auth) {
      case null:
        return;
      case false:
        return (
          <ul id="nav-mobile" className="right">
            <li>
              <a href="/auth/google">Login with Google</a>
            </li>
          </ul>
        );
      default:
        return (
          <ul id="nav-mobile" className="right">
            <li>
              <a>Available credits: 10</a>
            </li>
            <li>
              <a>ADD Credits</a>
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </ul>
        );
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo">Survey APP</a>
        {renderNavButtons()}
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);

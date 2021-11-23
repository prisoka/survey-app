import React, { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="left brand-logo">
          Survey APP
        </a>
        <ul id="nav-mobile" className="right">
          {isLoggedIn ? (
            <li>
              <a href="">Logout</a>
            </li>
          ) : (
            <li>
              <a href="">Login with Google</a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

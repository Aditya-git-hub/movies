import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <div className="logo">
            One<span>More</span>Ticket
          </div>
        </Link>
        <div className="search-bar">
          <input type="text" placeholder="Search Movies" />
        </div>
        <div className="city">
          <select name="cities">
            <option value="pu">Pune</option>
            <option value="mu">Mumbai</option>
            <option value="sa">Satara</option>
          </select>
        </div>
        <button className="sign">Sign</button>
        <div className="clear"></div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
function Header() {
  return (
    <div className="header">
      <img className="header__logo" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" />
      <div className="header__search">
        <input type="text" className="header__search_input"></input>
        <SearchIcon className="header__search_icon" />
      </div>
      <div className="header__nav">
        <div className="header__nav_options">
          <span className="header__nav_option_lineone">Hello Guest</span>
          <span className="header__nav_option_linetwo">Sign in</span>
        </div>
        <div className="header__nav_options">
          <span className="header__nav_option_lineone">Returns &</span>
          <span className="header__nav_option_linetwo">Orders</span>
        </div>

        <div className="header__nav_options">
          <span className="header__nav_option_lineone">Your</span>
          <span className="header__nav_option_linetwo">Prime</span>
        </div>
      </div>
      <div className="header__cart">
        <ShoppingCartIcon className="header__cart_icon" />
        <span className="header__nav_option_linetwo header__cart_count">2</span>
      </div>
    </div>
  );
}

export default Header;

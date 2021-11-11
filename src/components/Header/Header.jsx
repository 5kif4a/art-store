import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Menu from "../Menu/Menu";
import Search from "../Search/Search";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__content__menu">
          <Logo style={{ marginRight: "48px" }} />
          <Menu />
        </div>

        <Search />
      </div>
    </header>
  );
};

export default Header;

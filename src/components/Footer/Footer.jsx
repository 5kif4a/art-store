import React from "react";
import "./Footer.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as GeoIcon } from "../../assets/icons/geo.svg";
import Menu from "../Menu/Menu";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content__menu">
          <Logo style={{ marginRight: "48px" }} />
          <Menu />
        </div>

        <div className="footer__content__contacts">
          <p>
            <PhoneIcon /> <span>+7 (495) 555-55-55</span>
          </p>
          <p>
            <GeoIcon /> <span>г. Алматы, ул. Фурманова, 24</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

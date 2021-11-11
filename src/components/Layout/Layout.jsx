import React from "react";
import ArtWorkList from "../ArtworkList/ArtworkList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="root">
      <Header />
      <ArtWorkList />
      <Footer />
    </div>
  );
};

export default Layout;

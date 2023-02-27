import React from "react";
import { Link } from "react-router-dom";
import headerCSS from "../styles/headerCSS.module.css";

const Header = () => {
  return (
    <div className={headerCSS.header}>
      <Link to="/">
        <h1 className={headerCSS.title}>Pokemon</h1>
      </Link>
      <img src="/pokeball-logo-logo.png" alt="red ball" />
    </div>
  );
};

export default Header;

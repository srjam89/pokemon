import React from "react";
import headerCSS from "../styles/headerCSS.module.css";

const Header = () => {
  return (
    <div className={headerCSS.header}>
      <h1 className={headerCSS.title}>Pokemon</h1>
      <img src="/pokeball-logo-logo.png" alt="red ball" />
    </div>
  );
};

export default Header;

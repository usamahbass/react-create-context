import React from "react";
import Navbar from "./navbar";
import BotNavbar from "./botnavbar";

const Header = () => {
  return (
    <header className="bg-white text-gold ">
      <Navbar />
      <BotNavbar />
    </header>
  );
};

export default Header;

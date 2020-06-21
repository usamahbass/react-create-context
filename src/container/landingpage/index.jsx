import React from "react";
import BotNavbar from "../../components/header/botnavbar";
import Main from "../../components/main";
import Helmet from "../../components/helmet";

const LandingPage = () => {
  return (
    <React.Fragment>
      <Helmet title="Home | RaksyeShop" />
      <header>
        <BotNavbar />
      </header>

      <main>
        <Main />
      </main>
    </React.Fragment>
  );
};

export default LandingPage;

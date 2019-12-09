import React from "react";
import Header from "../containers/Header";

import Routes from "../Routes";

function Page() {
  return (
    <header>
      <Header isLoggedIn={false} />
      <Routes />
    </header>
  );
}

Page.propTypes = {};
Page.defaultProps = {};

export default Page;

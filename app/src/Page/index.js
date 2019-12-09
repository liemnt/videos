import React from "react";
import Header from "../components/Header";
import Movie from "../components/Movie";

function Page() {
  return (
    <header>
      <Header isLoggedIn={false} />
      <Movie />
    </header>
  );
}

Page.propTypes = {};
Page.defaultProps = {};

export default Page;

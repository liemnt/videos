import React from "react";

function Container({ children }) {
  return (
    <section style={{ maxWidth: 600, margin: "auto" }}>{children}</section>
  );
}

Container.propTypes = {};
Container.defaultProps = {};

export default Container;

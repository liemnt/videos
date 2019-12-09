import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { getIsLoggedIn } from "../../reducer/login.selector";

function HeaderContainer({ isLoggedIn }) {
  return <Header isLoggedIn={isLoggedIn} />;
}

const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state)
});

HeaderContainer.propTypes = {};
HeaderContainer.defaultProps = {};

export default connect(mapStateToProps)(HeaderContainer);

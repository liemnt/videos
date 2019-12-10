import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Header from "../../components/Header";
import { getIsLoggedIn } from "../../reducer/login.selector";

function HeaderContainer({ isLoggedIn, history }) {
  return (
    <Header
      onClickLogo={() => {
        history.push(process.env.PUBLIC_URL + "/");
      }}
      isLoggedIn={isLoggedIn}
    />
  );
}

const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state)
});

HeaderContainer.propTypes = {};
HeaderContainer.defaultProps = {};

export default connect(mapStateToProps)(withRouter(HeaderContainer));

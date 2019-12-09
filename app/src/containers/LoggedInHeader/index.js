import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoggedInHeader from "../../components/LoggedInHeader";
import { logout } from "../../actions/login";
import { getUserInfo } from "../../reducer/login.selector";

function LoggedInHeaderContainer({ logout, userInfo }) {
  return <LoggedInHeader onClickLogout={logout} userInfo={userInfo} />;
}

const mapStateToProps = state => ({
  userInfo: getUserInfo(state)
});

const mapDispatchToProps = {
  logout
};

LoggedInHeaderContainer.propTypes = {
  logout: PropTypes.func.isRequired
};
LoggedInHeaderContainer.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInHeaderContainer);

import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoggedInHeader from "../../components/LoggedInHeader";
import { logout } from "../../actions/login";
import { getUserInfo } from "../../reducer/login.selector";

function LoggedInHeaderContainer({ logout, userInfo, history }) {
  console.log(history);
  return (
    <LoggedInHeader
      onClickShare={() => {
        console.log("click share");
        history.push("/share");
      }}
      onClickLogout={logout}
      userInfo={userInfo}
    />
  );
}

const mapStateToProps = state => ({
  userInfo: getUserInfo(state)
});

const mapDispatchToProps = {
  logout
};

LoggedInHeaderContainer.propTypes = {
  logout: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};
LoggedInHeaderContainer.defaultProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoggedInHeaderContainer));

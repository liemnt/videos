import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LoggedOutHeader from "../../components/LoggedOutHeader";
import { login } from "../../actions/login";

function LoggedInHeaderContainer({ login }) {
  return <LoggedOutHeader onClickLogin={values => login(values)} />;
}

const mapDispatchToProps = {
  login
};

LoggedInHeaderContainer.propTypes = {
  login: PropTypes.func.isRequired
};
LoggedInHeaderContainer.defaultProps = {};

export default connect(
  null,
  mapDispatchToProps
)(LoggedInHeaderContainer);

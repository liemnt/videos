import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Movie from "../../components/Movie";
import { getIsLoggedIn } from "../../reducer/login.selector";

function MovieContainer({ isLoggedIn }) {
  return <Movie isLoggedIn={isLoggedIn} />;
}

const mapStateToProps = state => ({
  isLoggedIn: getIsLoggedIn(state)
});

MovieContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
MovieContainer.defaultProps = {};

export default connect(mapStateToProps)(MovieContainer);

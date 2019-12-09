import React from 'react';
import PropTypes from 'prop-types';

function LoginButton({loggedIn}) {
    return (
        <div>

        </div>
    );
}

LoginButton.propTypes = {
    loggedIn: PropTypes.bool
};
LoginButton.defaultProps = {
    loggedIn: false
};

export default LoginButton;

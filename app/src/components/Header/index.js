import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Typography } from "antd";
import LoggedOutHeader from "../../containers/LoggedOutHeader";
import LoggedInHeader from "../../containers/LoggedInHeader";

const { Title } = Typography;

function Header({ isLoggedIn, onClickLogo }) {
  return (
    <nav>
      <Row
        style={{ background: "#40a9ff", height: 80, padding: "0 20px" }}
        type="flex"
        justify="end"
        align="middle"
      >
        <Col onClick={onClickLogo} style={{ cursor: "pointer" }} span={12}>
          <Row gutter={15} type="flex" align="middle">
            <Col>
              <Title level={4}>Logo</Title>
            </Col>
            <Col>
              <Title style={{ color: "white" }} level={3}>
                Funny Movies
              </Title>
            </Col>
          </Row>
        </Col>
        <Col style={{ marginTop: 16 }} span={12}>
          {isLoggedIn ? <LoggedInHeader /> : <LoggedOutHeader />}
        </Col>
      </Row>
    </nav>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  onClickLogo: PropTypes.func.isRequired
};
Header.defaultProps = {
  isLoggedIn: false
};

export default Header;

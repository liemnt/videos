import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Typography } from "antd";
import LoggedOutHeader from "../LoggedOutHeader";
import LoggedInHeader from "../LoggedInHeader";

const { Title } = Typography;

function Header({ isLoggedIn }) {
  return (
    <nav>
      <Row
        style={{ background: "#40a9ff", height: 80, padding: "0 20px" }}
        type="flex"
        justify="flex-end"
        align="middle"
      >
        <Col span={12}>
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
        <Col span={12}>
          {isLoggedIn ? <LoggedInHeader /> : <LoggedOutHeader />}
        </Col>
      </Row>
    </nav>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool
};
Header.defaultProps = {
  isLoggedIn: false
};

export default Header;

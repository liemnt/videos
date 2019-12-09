import React from "react";
import { Input, Button, Col, Row } from "antd";

function LoggedOutHeader() {
  return (
    <Row type="flex" justify="end" align="middle" gutter={15}>
      <Col>
        <Input placeholder="email" />
      </Col>
      <Col>
        <Input placeholder="password" />
      </Col>
      <Col>
        <Button>Login / Register</Button>
      </Col>
    </Row>
  );
}

LoggedOutHeader.propTypes = {};
LoggedOutHeader.defaultProps = {};

export default LoggedOutHeader;

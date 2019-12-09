import React from "react";
import { Col, Row, Button } from "antd";

function LoggedInHeader() {
  return (
    <Row type="flex" justify="end" align="middle" gutter={15}>
      <Col>Welcome someone@gmail.com</Col>
      <Col>
        <Button>Share a movie</Button>
      </Col>
      <Col>
        <Button>Logout</Button>
      </Col>
    </Row>
  );
}

LoggedInHeader.propTypes = {};
LoggedInHeader.defaultProps = {};

export default LoggedInHeader;

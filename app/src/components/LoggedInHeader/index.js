import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Button, Form } from "antd";
const { Item: FormItem } = Form;

function LoggedInHeader({ onClickLogout, userInfo, onClickShare }) {
  return (
    <Row type="flex" justify="end" align="middle" gutter={15}>
      <Col>
        <FormItem>Welcome {userInfo.email}</FormItem>
      </Col>
      <Col>
        <FormItem>
          <Button onClick={onClickShare}>Share a movie</Button>
        </FormItem>
      </Col>
      <Col>
        <FormItem>
          <Button onClick={onClickLogout}>Logout</Button>
        </FormItem>
      </Col>
    </Row>
  );
}
LoggedInHeader.propTypes = {
  onClickLogout: PropTypes.func.isRequired,
  onClickShare: PropTypes.func.isRequired,
  userInfo: PropTypes.object.isRequired
};
LoggedInHeader.defaultProps = {};

export default LoggedInHeader;

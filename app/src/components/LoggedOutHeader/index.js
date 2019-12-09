import React from "react";
import PropTypes from "prop-types";
import { Input, Button, Col, Row, Form } from "antd";

const { Item: FormItem } = Form;

function LoggedOutHeader({ form, onClickLogin: onClickLoginAction }) {
  const { validateFieldsAndScroll, getFieldDecorator } = form;
  const onClickLogin = () => {
    validateFieldsAndScroll((err, values) => {
      if (!err) {
        onClickLoginAction(values);
      }
    });
  };
  return (
    <Row type="flex" justify="end" align="middle" gutter={15}>
      <Col>
        <FormItem>
          {getFieldDecorator("email", {
            rules: [
              {
                required: true,
                message: "Vui lòng nhập email"
              },
              {
                type: "email",
                message: "Vui lòng nhập đúng định dạng email"
              }
            ]
          })(<Input placeholder="email" />)}
        </FormItem>
      </Col>
      <Col>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Vui lòng nhập password"
              }
            ]
          })(<Input placeholder="password" type="password" />)}
        </FormItem>
      </Col>
      <Col>
        <FormItem>
          <Button onClick={onClickLogin}>Login / Register</Button>
        </FormItem>
      </Col>
    </Row>
  );
}

LoggedOutHeader.propTypes = {
  onClickLogin: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
};
LoggedOutHeader.defaultProps = {};

export default Form.create()(LoggedOutHeader);

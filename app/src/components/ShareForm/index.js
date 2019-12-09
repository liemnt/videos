import React from "react";
import { Card, Button, Input, Form } from "antd";
import PropTypes from "prop-types";

const { Item } = Form;

function ShareForm({ form }) {
  return (
    <Card title="Share a Youtube movie">
      <Item
        label="Youtube URL"
        wrapperCol={{ span: 18 }}
        labelCol={{ span: 6 }}
      >
        <Input />
      </Item>
      <Item wrapperCol={{ span: 18, offset: 6 }}>
        <Button style={{ width: "100%" }}>Share</Button>
      </Item>
    </Card>
  );
}

ShareForm.propTypes = {
  form: PropTypes.object.isRequired
};
ShareForm.defaultProps = {};

export default Form.create()(ShareForm);

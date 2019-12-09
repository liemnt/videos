import React from "react";
import { Row, Col, Icon } from "antd";
import PropTypes from "prop-types";

function Movie({ loggedIn }) {
  return (
    <article style={{ maxWidth: 800 }}>
      <Row type="flex" justify="space-between" align="middle">
        <Col span={12}>Video Here</Col>
        <Col span={12}>
          <h3>Movie Title</h3>
          <Row type="flex" justify="space-between" align="middle">
            <Col>Shared By: someone@gmail.com</Col>
            <Col>
              <Row gutter={20} type="flex" justify="end" align="middle">
                <Col>
                  <Icon
                    style={{ cursor: "pointer", fontSize: "2em" }}
                    type="like"
                  />
                </Col>
                <Col>
                  <Icon
                    style={{ cursor: "pointer", fontSize: "2em" }}
                    type="dislike"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={15} type="flex" justify="start" align="middle">
            <Col>
              89 <Icon type="like" />
            </Col>
            <Col>
              12 <Icon type="dislike" />
            </Col>
          </Row>
          <br />
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi metus
            magna, suscipit ut fermentum sit amet, condimentum sit amet elit.
            Sed facilisis suscipit luctus. Duis nisi lacus, malesuada ac
            hendrerit eget, condimentum vitae neque.
          </p>
        </Col>
      </Row>
    </article>
  );
}

Movie.propTypes = {
  loggedIn: PropTypes.bool
};
Movie.defaultProps = {
  loggedIn: false
};

export default Movie;

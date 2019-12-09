import React from "react";
import { Row, Col, Icon } from "antd";
import PropTypes from "prop-types";

function Movie({ isLoggedIn }) {
  return (
    <article>
      <Row gutter={20} type="flex" justify="space-between" align="middle">
        <Col span={10}>
          <video
            controls={true}
            src="https://www.w3schools.com/tags/movie.mp4"
          />
        </Col>
        <Col span={14}>
          <h3 style={{ color: "red" }}>Movie Title</h3>
          <Row type="flex" justify="space-between" align="middle">
            <Col>Shared By: someone@gmail.com</Col>
            {isLoggedIn && (
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
            )}
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
            hendrerit eget, condimentum vitae neque.Fusce mattis, erat ut
            scelerisque blandit, nisi velit fermentum lacus, ac mattis eros
            magna id odio.
          </p>
        </Col>
      </Row>
    </article>
  );
}

Movie.propTypes = {
  isLoggedIn: PropTypes.bool
};
Movie.defaultProps = {
  loggedIn: false
};

export default Movie;

import React from "react";
import Movie from "../../containers/Movie";
import Container from "../../components/Container";

function ListPage(props) {
  return (
    <Container>
      {Array(10)
        .fill(1)
        .map((item, index) => {
          return (
            <div key={index}>
              <br />
              <Movie />
              <br />
            </div>
          );
        })}
    </Container>
  );
}

ListPage.propTypes = {};
ListPage.defaultProps = {};

export default ListPage;

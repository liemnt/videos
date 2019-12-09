import React from "react";
import Movie from "../../containers/Movie";
import Container from "../../components/Container";

function ListPage(props) {
  return (
    <Container>
      {Array(10)
        .fill(1)
        .map(item => {
          return (
            <>
              <br />
              <Movie />
              <br />
            </>
          );
        })}
    </Container>
  );
}

ListPage.propTypes = {};
ListPage.defaultProps = {};

export default ListPage;

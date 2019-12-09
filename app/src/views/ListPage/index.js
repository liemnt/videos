import React from "react";
import Movie from "../../components/Movie";

function ListPage(props) {
  return (
    <section>
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
    </section>
  );
}

ListPage.propTypes = {};
ListPage.defaultProps = {};

export default ListPage;

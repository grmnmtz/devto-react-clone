import React from "react";
import { ResultsSideBar } from "components/ResultsSideBar";
import { Container } from "components/Container";
import { Columns } from "components/Columns";
function Search() {
  return (
    <div>
      <Container>
        <Columns>
          <ResultsSideBar />
        </Columns>
        <Columns></Columns>
      </Container>
    </div>
  );
}

export default Search;
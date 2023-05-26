import React from "react";
import SingleCard from "./SingleCard";
import { Container, Row } from "react-bootstrap";

const FilterMenu = ({ myData }) => {
  return (
    <>
      <Container>
        <Row className="g-5">
          {myData.map((item, index) => {
            return <SingleCard single={item} key={index} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default FilterMenu;

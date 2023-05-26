import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleCard = ({ single }) => {
  return (
    <>
      <Col lg={4} >
        <Card style={{ width: "100%", height: "100%" }}>
          <Card.Img variant="top" src={single.imageUrl} style={{height:"400px"}} />
          <Card.Body>
            <Card.Title>{single.author}</Card.Title>
            <Card.Text>{single.date}</Card.Text>
            <Button variant="primary">{single.time}</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleCard;

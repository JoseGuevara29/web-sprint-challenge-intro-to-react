// Write your Character component here
import React, { useEffect, useState } from "react";

import {
  Card,
  CardText,
  CardBody,
  Button,
  Collapse,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
export default function Character(props) {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState("Closed");
  const onEntered = () => setStatus("Opened");
  const onExited = () => setStatus("Closed");
  const toggle = () => setCollapse(!collapse);

  console.log(props.data);
  const films = " " + props.data.films;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: "25px",
        }}
      >
        <h5>{props.data.name}</h5>
        <Button
          outline
          color="secondary"
          size="sm"
          onClick={toggle}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0px 25px",
          }}
        >
          Toggle
        </Button>
      </div>

      <Collapse isOpen={collapse} onEntered={onEntered} onExited={onExited}>
        {status === "Opened" && (
          <Card>
            <CardBody>
              <CardText>
                <ListGroup
                  // horizontal
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "1",
                    height: "100%",
                  }}
                >
                  <ListGroupItem>
                    Birth Year: {props.data.birth_year}
                  </ListGroupItem>
                  <ListGroupItem>Gender: {props.data.gender}</ListGroupItem>
                  <ListGroupItem>
                    Skin Color: {props.data.skin_color}
                  </ListGroupItem>
                  <ListGroupItem>
                    Films:
                    {/* {Object.values(props.data.films)} */}
                    {films}
                  </ListGroupItem>
                  <ListGroupItem>
                    Vehicles: {props.data.vehicles.length}
                  </ListGroupItem>
                </ListGroup>
              </CardText>
            </CardBody>
          </Card>
        )}
      </Collapse>
    </div>
  );
}

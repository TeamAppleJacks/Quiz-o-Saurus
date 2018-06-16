import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

const OptionCard = function (props) {
  return (
    <Col xs="4">
      <Card>
        <CardBody>
          <CardText>{props.option}</CardText>
        </CardBody>
      </Card>
    </Col>
  )
}
export default OptionCard;
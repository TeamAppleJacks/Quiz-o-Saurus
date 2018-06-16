import React from 'react';
import {
  Card, CardImg, CardText, CardImgOverlay, Row, Col
} from 'reactstrap';

const OptionCard = function (props) {

  return (
    <Col xs="3">
      <Card className="text-center ">
        <CardImg opacity="505" width="100%" src="http://svgcuttingfiles.com/images/PP-ChibiBabyDInos.png" />
        <CardImgOverlay>
          <CardText>{props.option}</CardText>
        </CardImgOverlay>
      </Card>
    </Col>
  )
}
export default OptionCard;
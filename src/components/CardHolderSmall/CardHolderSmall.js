import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { putCardStringGetImage } from "../../utils/cardSrc";

let cardSrc = require("../../utils/cardSrc");

class CardHolderSmall extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="mx-0 px-0 mt-1">
          <Row>
            {/* <Col xs={0} sm={2} md={3} lg={3} xl={3} className=''> */}

            {/* </Col> */}
            {/* <Col xs={12} sm={8} md={6} lg={6} xl={6}> */}
            <Container fluid className="cardHolder pb-1">
              <h4 className="text-center mb-0 main-font-family">HOLE CARDS</h4>
              <Row xs={2} sm={2} md={2} lg={2} xl={2} className="">
                <Col className="px-1">
                  <img
                    className="card border border-dark float-right hole-card-img"
                    src={putCardStringGetImage[this.props.holeCards[0]]}
                  />
                </Col>
                <Col className="px-1">
                  <img
                    className="card border border-dark float-left hole-card-img"
                    src={putCardStringGetImage[this.props.holeCards[1]]}
                  />
                </Col>
              </Row>
            </Container>
            {/* </Col> */}

            {/* <Col xs={0} sm={2} md={3} lg={3} xl={3}> */}

            {/* </Col> */}
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

CardHolderSmall.propTypes = {
  holeCards: PropTypes.oneOfType([PropTypes.string, PropTypes.string])
    .isRequired,
};

export default CardHolderSmall;

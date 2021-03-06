import React from "react";
import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CardHolderLarge.css";
import { putCardStringGetImage } from "../../utils/cardSrc";

//CD1A1A red
//FAFF0E yellow

let cardSrc = require("../../utils/cardSrc");

class CardHolderLarge extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid className="mx-0 px-0 mt-1">
          <Row>
            {/* <Col xs={0} sm={2} md={3} lg={3} xl={3} className=''> */}

            {/* </Col> */}
            {/* <Col xs={12} sm={8} md={6} lg={6} xl={6}> */}
            <Container fluid className="cardHolder pb-1">
              <h4 className="text-center mb-0 main-font-family">FLOP</h4>
              <Row
                xs={5}
                sm={5}
                md={5}
                lg={5}
                xl={5}
                className="mx-auto justify-content-center"
              >
                <Col className="px-1 d-flex justify-content-center">
                  <img
                    className="card border border-dark large-card-img"
                    src={putCardStringGetImage[this.props.flopCards[0]]}
                  />
                </Col>
                <Col className="px-1 d-flex justify-content-center">
                  <img
                    className="card border border-dark large-card-img"
                    src={putCardStringGetImage[this.props.flopCards[1]]}
                  />
                </Col>
                <Col className="px-1 d-flex justify-content-center">
                  <img
                    className="card border border-dark large-card-img"
                    src={putCardStringGetImage[this.props.flopCards[2]]}
                  />
                </Col>
                <Col className="px-1 d-flex justify-content-center">
                  <img
                    className="card border border-dark large-card-img"
                    src={putCardStringGetImage[this.props.flopCards[3]]}
                  />
                </Col>
                <Col className="px-1 d-flex justify-content-center">
                  <img
                    className="card border border-dark large-card-img"
                    src={putCardStringGetImage[this.props.flopCards[4]]}
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

CardHolderLarge.propTypes = {
  flopCards: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
    PropTypes.string,
  ]).isRequired,
};

export default CardHolderLarge;

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./AnswerHolder.css";
import Modal from "react-bootstrap/Modal";

let cardSrc = require("../../utils/cardSrc");

class AnswerHolder extends React.Component {
  render() {
    //     const [show, setShow] = useState(false);

    //   const handleClose = () => setShow(false);
    //   const handleShow = () => setShow(true);
    return (
      <React.Fragment>
        <Container fluid className="mx-0 px-0 mt-1">
          <Modal
            show={this.props.show}
            onHide={this.props.handleClose}
            className="modal-dialog text-center"
          >
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
              <div id="outsWrapper">
                <div id="outsInnerWrapper">
                  <img
                    className="card border border-dark mx-auto inline-block"
                    src={cardSrc.s3}
                    style={{
                      width: "100%",
                      height: "auto",
                      "max-width": "50px",
                    }}
                  />
                  <img
                    className="card border border-dark mx-auto inline-block"
                    src={cardSrc.s3}
                    style={{
                      width: "100%",
                      height: "auto",
                      "max-width": "50px",
                    }}
                  />
                  <img
                    className="card border border-dark mx-auto inline-block"
                    src={cardSrc.s3}
                    style={{
                      width: "100%",
                      height: "auto",
                      "max-width": "50px",
                    }}
                  />
                  <img
                    className="card border border-dark mx-auto inline-block"
                    src={cardSrc.s3}
                    style={{
                      width: "100%",
                      height: "auto",
                      "max-width": "50px",
                    }}
                  />
                  <img
                    className="card border border-dark mx-auto inline-block"
                    src={cardSrc.s3}
                    style={{
                      width: "100%",
                      height: "auto",
                      "max-width": "50px",
                    }}
                  />
                  <img
                    className="card border border-dark mx-auto inline-block"
                    src={cardSrc.s3}
                    style={{
                      width: "100%",
                      height: "auto",
                      "max-width": "50px",
                    }}
                  />
                  <img
                    className="card border border-dark mx-auto inline-block"
                    src={cardSrc.s3}
                    style={{
                      width: "100%",
                      height: "auto",
                      "max-width": "50px",
                    }}
                  />
                  <img
                    className="card border border-dark mx-auto inline-block"
                    src={cardSrc.s3}
                    style={{
                      width: "100%",
                      height: "auto",
                      "max-width": "50px",
                    }}
                  />
                  <img
                    className="card border border-dark mx-auto inline-block"
                    src={cardSrc.s3}
                    style={{
                      width: "100%",
                      height: "auto",
                      "max-width": "50px",
                    }}
                  />
                  
                </div>
              </div>
            </Modal.Body>
            {/* <Modal.Footer>
              

              <Button
                      variant="secondary"
                      size="sm"
                      onClick={this.props.handleClose}
                    >
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={this.props.handleClose}
                    >
                      Save Changes
                    </Button>
            </Modal.Footer> */}
          </Modal>
          <Row>
            <Col xs={0} sm={2} md={3} lg={4} xl={4} className=""></Col>
            <Col xs={12} sm={8} md={6} lg={4} xl={4}>
              <Container fluid className="cardHolder pb-1">
                <h6 className="text-center mb-1">How many outs do you have?</h6>
                <Row xs={5} sm={5} md={5} lg={5} xl={5} className="">
                  <Col className="px-1">
                    <Button
                      variant="dark"
                      block
                      onClick={this.props.handleShow}
                    >
                      12
                    </Button>{" "}
                  </Col>
                  <Col className="px-1">
                    <Button
                      variant="dark"
                      block
                      onClick={this.props.handleShow}
                    >
                      4
                    </Button>{" "}
                  </Col>
                  <Col className="px-1">
                    <Button
                      variant="dark"
                      block
                      onClick={this.props.handleShow}
                    >
                      5
                    </Button>{" "}
                  </Col>
                  <Col className="px-1">
                    <Button
                      variant="dark"
                      block
                      onClick={this.props.handleShow}
                    >
                      19
                    </Button>{" "}
                  </Col>
                  <Col className="px-1">
                    <Button
                      variant="dark"
                      block
                      onClick={this.props.handleShow}
                    >
                      2
                    </Button>{" "}
                  </Col>
                </Row>
              </Container>
            </Col>

            <Col xs={0} sm={2} md={3} lg={4} xl={4}></Col>
          </Row>
        </Container>

        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal> */}
      </React.Fragment>
    );
  }
}

export default AnswerHolder;

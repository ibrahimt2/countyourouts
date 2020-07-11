import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Button from "react-bootstrap/Button";
import Tooltip from "react-bootstrap/Tooltip";

function renderTooltip(props) {
    return (
      <Tooltip id="button-tooltip" {...props}>
        An out is a card left in the deck that will improve your hand
      </Tooltip>
    );
  }
  
  const QuestionTooltip = () => (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
    <h3 className="text-center mb-1 main-font-family">How many outs do you have?</h3>
    {/* <Button variant="secondary" style={{'border-radius':'40%'}}>?</Button> */}
    </OverlayTrigger>
  );
  

  export default QuestionTooltip;
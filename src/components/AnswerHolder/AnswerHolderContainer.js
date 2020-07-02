import React from 'react';
import AnswerHolder from './AnswerHolder'
import PropTypes from 'prop-types'

class AnswerHolderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {show: false}

        this.setShow = this.setShow.bind(this);
    }

    setShow(newShow) {
        this.setState({
            show: newShow
        });
    }

    handleClose = () => this.setShow(false);
    handleShow = () => this.setShow(true)

    render() {
        return <AnswerHolder handleShow={this.handleShow} handleClose={this.handleClose} show={this.state.show} outs={['Ac', '3c', '4c','Ac', '3c', '4c','Ac', '3c', '4c']} drawName={this.props.drawName} answerFeedback={'Suck on my balls'} drawDescription={'Also on my dick while your at it motherfucker'} outsNumber={this.props.outsNumber}/>;
    }
}

AnswerHolder.propTypes = {
    outs: PropTypes.array,
    drawName: PropTypes.string,
    drawDescription: PropTypes.string,
    outNumber: PropTypes.number
  };

export default AnswerHolderContainer;
import React from 'react';
import AnswerHolder from './AnswerHolder'

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
        return <AnswerHolder handleShow={this.handleShow} handleClose={this.handleClose} show={this.state.show}/>;
    }
}

export default AnswerHolderContainer;
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


let cardSrc = require('../../utils/cardSrc')

class CardHolderLarge extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <h6 className='text-center'>FLOP</h6>
                    <Row xs={5} s={5} md={5} lg={5} xl={5} className='mx-xl-5 mx-lg-5 mx-md-5 mx-sm-1 mx-xs-0'>
                        <Col className='text-center px-1'><img className='card border border-dark' src={cardSrc.s3} style={{'width': '100%', 'height': 'auto'}}/></Col>
                        <Col className='text-center px-1'><img className='card border border-dark' src={cardSrc.s3} style={{'width': '100%', 'height': 'auto'}}/></Col>
                        <Col className='text-center px-1'><img className='card border border-dark' src={cardSrc.s3} style={{'width': '100%', 'height': 'auto'}}/></Col>
                        <Col className='text-center px-1'><img className='card border border-dark' src={cardSrc.s3} style={{'width': '100%', 'height': 'auto'}}/></Col>
                        <Col className='text-center px-1'><img className='card border border-dark' src={cardSrc.s3} style={{'width': '100%', 'height': 'auto'}}/></Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default CardHolderLarge;
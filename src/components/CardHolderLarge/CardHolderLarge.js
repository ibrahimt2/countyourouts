import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './CardHolderLarge'

let cardSrc = require('../../utils/cardSrc.js');

class CardHolderLarge extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <h6 className='text-center'>FLOP</h6>
                    <Row lg={5} className="mx-5" >
                        <Col className='text-center overflow-visible'><img className='card border border-dark' style={{width: '100%', height: 'auto'}} src={cardSrc.c10}/></Col>
                        <Col className='text-center overflow-visible'><img className='card border border-dark' style={{width: '100%', height: 'auto'}} src={cardSrc.dK}/></Col>
                        <Col className='text-center overflow-visible'><img className='card border border-dark' style={{width: '100%', height: 'auto'}} src={cardSrc.h8}/></Col>
                        <Col className='text-center overflow-visible'><img className='card border border-dark' style={{width: '100%', height: 'auto'}} src={cardSrc.s2}/></Col>
                        <Col className='text-center overflow-visible'><img className='card border border-dark' style={{width: '100%', height: 'auto'}} src={cardSrc.sK}/></Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default CardHolderLarge;
import React, { ChangeEvent, useState } from 'react';
import './home-page.scss';
import TutorialGame from '../../components/tutorial/tutorial';
import { Container, Row, Col } from 'react-bootstrap';


const HomePage = () => {
    return (
        <div className="HomePage">
            <Container className="d-flex justify-content-center" fluid>
                <Row>
                    <Col xs={12}>
                        <TutorialGame />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;

import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../styles/factura.css';

const ListadoObraSocial = () => {
    return (
        <div className='cuadrado'>
            <Container>
                <Row>
                    <Col sm={6} className='titulo-obrasocial' style={{ display: 'flex', alignItems: 'center' }}>
                    <h4>Seleccione la obra social:</h4>
                        <Form.Select style={{ height: '40px', fontSize: '20px', marginLeft: '10px' }} className="select-al-lado">
                            <option>Seleccionar</option>
                            <option value="1">Pami</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>

                </Row>
            </Container>
        </div>
    );
}

export default ListadoObraSocial;

        {/* <h2 className='titulo-obrasocial'> Seleccione la obra social:</h2>
            <Form.Select className="select-al-lado">
                <option>Open this select menu</option>
                <option value="1">Pami</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select> */}
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Cookies from 'universal-cookie';

import '../../styles/factura.css';

const cookies = new Cookies();

const ListadoObraSocial = () => {
    const [obrasSociales, setObrasSociales] = useState([]);
    const [obraSocialSeleccionada, setObraSocialSeleccionada] = useState('');

    useEffect(() => {
        const obtenerObrasSociales = async () => {
            try {
                const response = await axios.get('https://localhost:7147/ObraSocial');
                setObrasSociales(response.data);
                
            } catch (error) {
                console.error('Error al obtener las obras sociales:', error);
            }
        };

        obtenerObrasSociales();
    }, []);

    const handleChangeObraSocial = (e) => {
        setObraSocialSeleccionada(e.target.value);
        cookies.set('obraSocial', (e.target.value));
        console.log("Cookie seteada: ", cookies.get('obraSocial'));
    };

    return (
        <div className='cuadrado'>
            <Container>
                <Row>
                    <Col sm={6} className='titulo-obrasocial' style={{ display: 'flex', alignItems: 'center' }}>
                        <h4>Seleccione la obra social:</h4>
                        <Form.Select
                            style={{ height: '40px', fontSize: '20px', marginLeft: '10px' }}
                            className="select-al-lado"
                            value={obraSocialSeleccionada}
                            onChange={handleChangeObraSocial}
                        >
                            <option>Seleccionar</option>
                            {obrasSociales.map((obraSocial) => (
                                <option key={obraSocial.id} value={obraSocial.id}>
                                    {obraSocial.nombre}
                                </option>
                            ))}
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
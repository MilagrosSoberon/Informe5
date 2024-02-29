import React, { useState } from 'react';
import { Modal, Button, Col, Row, Container } from 'react-bootstrap';


function ModalFactura({ onClose }) {
    const [showModal, setShowModal] = useState(true);

    const handleClose = () => {
        setShowModal(false);
        onClose(); // Llama a la función onClose para notificar al componente padre que el modal se cerró
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Alta cobranza</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
          <Row className="border">
            <Col xs={12} md={8}>
              Fecha: xxxxxxxx
            </Col>
            <Col xs={6} md={4}>
              numero
            </Col>
          </Row>

          <Row>
          <Col xs={12} md={8}>
              Numero de factura: xxxxxxxx
            </Col>
          </Row>
          <Row>
          <Col xs={12} md={8}>
              Monto a pagar: xxxxxxxx
            </Col>
          </Row>
        </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Registrar
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalFactura;

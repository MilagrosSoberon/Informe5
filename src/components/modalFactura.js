import React, { useEffect, useState } from 'react';
import { Modal, Button, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';

function ModalFactura({ onClose, factura }) {
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
        {factura ? (
          <Container>
            <Row className="border">
              <Col xs={12} md={8}>
                fecha:
              </Col>
              <Col xs={6} md={4}>
                Numero:
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                Numero: {factura.numero}
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={8}>
                Importe: {factura.importeTotal}
              </Col>
            </Row>
          </Container>
        ) : (
          <p>No se ha proporcionado ninguna factura</p>
        )}
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

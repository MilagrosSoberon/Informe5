import React, { useEffect, useState } from 'react';
import { Modal, Button, Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function ModalFactura({ onClose, factura, idFactura }) {
  const [showModal, setShowModal] = useState(true);
  const [fechaHoy, setFechaHoy] = useState(new Date());
  const [formattedDateToday, setFormattedDateToday] = useState('');
  const [formattedDateISO, setFormattedDateISO] = useState('');
  const [numeroCobranza, setNumeroCobranza] = useState(null);

  const handleClose = () => {
    registrarCobranza();
    actualizarEstado();
    setShowModal(false);
    onClose(); // Llama a la función onClose para notificar al componente padre que el modal se cerró
    window.location.reload(); // Recarga la página
  };


  const getUltimoNumeroCobranza = async () => {
    try {
      const response = await axios.get(`https://localhost:7147/Cobranza/ultimoNumero`);

      setNumeroCobranza((response.data) + 1);
      console.log('El  numero d conraza es es:', numeroCobranza);

    } catch (error) {
      console.error('Error al obtener el id: ', error)
    }
  };

  const registrarCobranza = async () => {

    const dataCobranza = {

      id: 0,
      fecha: formattedDateISO,
      monto: factura.importeTotal,
      numero: 0,
      idFactura: idFactura
    }
    console.log(dataCobranza);
    try {
      const response = await axios.post('https://localhost:7147/Cobranza', dataCobranza);
      console.log('Respuesta de la cobranza:', response.data);

      // Muestra un mensaje de éxito utilizando react-toastify
      toast.success('Carga de bono realizada con éxito')
    } catch (error) {

      console.error('Error al realizar la carga:', error.message);
      // Muestra un mensaje de error utilizando react-toastify
      toast.error('Error al realizar la carga');
    }
  };

  const actualizarEstado = async () => {
    
    try {
      const response = await axios.patch(`https://localhost:7147/Factura/${idFactura}?idEstadoPago=1`);
      

    } catch (error) {
      console.error('Error al obtener el id: ', error)
    }

  };
  useEffect(() => {

    // Obtener la fecha actual
    const today = new Date();
    setFechaHoy(today);
    setFormattedDateISO(fechaHoy.toISOString()); // Formatear la fecha actual
    //HORA ACTUAL 
    setFormattedDateToday(fechaHoy.toLocaleString());
    console.log("fecha de cobranza: " + formattedDateISO);

    getUltimoNumeroCobranza();
  }, []);


  return (
    <div>
    <ToastContainer></ToastContainer>
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Alta cobranza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="border">
          <Col xs={12} md={8}>
            Fecha: {formattedDateToday}
          </Col>
          <Col xs={6} md={4}>
            Numero: {numeroCobranza}
          </Col>
        </Row>
        {factura ? (
          <Container>
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
        <Button variant="primary" onClick={handleClose} >
          Registrar
        </Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  ); 
}

export default ModalFactura;

import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import ModalFactura from '../modalFactura'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const ListadoFactura = () => {

    const [facturas, setFacturas] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

    const abrirModal = () => {
        setMostrarModal(true);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
    };


    useEffect(() => {
        obtenerFacturasPorObraSocial();

        // Suscripción a cambios en la cookie 'obraSocial'
        const handleChange = () => {
            obtenerFacturasPorObraSocial();
        };

        cookies.addChangeListener(handleChange);

        // Retirar el listener cuando el componente se desmonta
        return () => {
            cookies.removeChangeListener(handleChange);
        };
    }, []); // <-- Importante: Dejar la dependencia vacía para que se ejecute solo una vez al montar el componente

    const obtenerFacturasPorObraSocial = async () => {
        try {
            const cookieObraSocial = cookies.get('obraSocial');
            const response = await axios.get(`https://localhost:7147/Factura/factXObraSocial/${cookieObraSocial}`);
            setFacturas(response.data);
        } catch (error) {
            console.error('Error al obtener las facturas:', error);
        }
    };

    return (
        <div>
            <h2 className='titulo-factura'> Listado de las facturas</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numero de Factura</th>
                        <th>Estado</th>
                        <th>Importe</th>
                        <th>Fecha de vencimiento</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {facturas.map((factura, index) => (
                        <tr key={index}>
                            <td>{factura.numero}</td>
                            <td>{factura.estadoPago}</td>
                            <td>{factura.importeTotal}</td>
                            <td>{factura.fechaVencimiento}</td>
                                    
                            <td colSpan={2}>
                                <button className='btn btn-success' onClick={abrirModal} disabled={mostrarModal}>
                                    Cobrar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* Renderiza el modal solo si mostrarModal es verdadero */}
            {mostrarModal && <ModalFactura onClose={cerrarModal} />}
        </div>
    )
}

export default ListadoFactura;

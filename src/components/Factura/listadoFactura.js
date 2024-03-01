import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import ModalFactura from '../modalFactura';
import Cookies from 'universal-cookie';


const ListadoFactura = () => {
    const cookies = new Cookies();

    const [facturas, setFacturas] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [facturaSeleccionada, setFacturaSeleccionada] = useState(null);
    const [idFactura, setIdFactura] = useState(null);
    const [dataFactura, setDataFactura] = useState([]);


    const abrirModal = async (numeroFactura) => {
        setMostrarModal(true);
        setFacturaSeleccionada(numeroFactura);
        await obtenerIdPorNumero(numeroFactura);
    };

    const cerrarModal = () => {
        setMostrarModal(false);
    };

    const obtenerFacturasPorObraSocial = async () => {
        try {
            const cookieObraSocial = cookies.get('obraSocial');
            const response = await axios.get(`https://localhost:7147/Factura/factXObraSocial/${cookieObraSocial}`);
            setFacturas(response.data);
        } catch (error) {
            console.error('Error al obtener las facturas:', error);
        }
    };

    


    const obtenerIdPorNumero = async (facturaSeleccionada) => {
        try {
            const response = await axios.get(`https://localhost:7147/Factura/IdxNumero/${facturaSeleccionada}`);

            setIdFactura(response.data.id);
            console.log('El id de la factura seleccionada es:', idFactura);

            // Aquí llamamos a getFacturaPorId después de establecer el id de la factura
            await getFacturaPorId(response.data.id);

        } catch (error) {
            console.error('Error al obtener el id: ', error)
        }
    };
    const getFacturaPorId = async (idFactura) => {
        try {
            const response = await axios.get(`https://localhost:7147/Factura/${idFactura}`);
            setDataFactura(response.data);
            console.log('La data de la factura seleccionada es:', response.data);
        }
        catch (error) {
            console.error('Error al obtener la factura : ', error)
        }
    }

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
                            <button
                                    className='btn btn-success'
                                    onClick={() => abrirModal(factura.numero)}
                                    disabled={mostrarModal || factura.estadoPago === 'Pagada'} // Aquí se deshabilita el botón si factura.estadoPago es 'pagada'
                                >
                                    Cobrar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* Renderiza el modal solo si mostrarModal es verdadero */}
            {mostrarModal && <ModalFactura onClose={cerrarModal} factura={dataFactura} idFactura={idFactura}/>}
        </div>
    )
}

export default ListadoFactura;

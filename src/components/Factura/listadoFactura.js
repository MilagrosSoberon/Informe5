import React from 'react'
import Table from 'react-bootstrap/Table';
import '../../styles/factura.css'

const ListadoFactura = () => {
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
                    <tr>
                        <td>12334</td>
                        <td>pagada</td>
                        <td>$1234</td>
                        <td>10/01</td>
                        <td colSpan={2}>
                            <button className='btn btn-success' >
                                Cobrar
                            </button>
                        </td>
                    </tr>

                </tbody>
            </Table>
        </div>
    )
}

export default ListadoFactura
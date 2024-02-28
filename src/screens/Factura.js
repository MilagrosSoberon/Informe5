import React from 'react'
import ListadoFactura from '../components/Factura/listadoFactura';
import ListadoObraSocial from '../components/Factura/ListadoObraSocial';


const Factura = () => {

  return (
    <div>
      <h1>Pagina para Facturas</h1>
      <div className='container text-center'>
      <ListadoObraSocial></ListadoObraSocial>
     
        <ListadoFactura></ListadoFactura>
      </div>

    </div>
  )
}

export default Factura
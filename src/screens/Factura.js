import React, { useEffect } from 'react';
import ListadoFactura from '../components/Factura/listadoFactura';
import ListadoObraSocial from '../components/Factura/ListadoObraSocial';
import Cookies from 'universal-cookie';

const Factura = () => {
  const cookies = new Cookies();
  // Eliminar la cookie al cargar el componente
  useEffect(() => {
    return () => {
      cookies.remove('obraSocial');
    };
  }, []);
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
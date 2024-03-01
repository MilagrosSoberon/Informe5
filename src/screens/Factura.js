import React, { useEffect } from 'react';
import ListadoFactura from '../components/Factura/listadoFactura';
import ListadoObraSocial from '../components/Factura/ListadoObraSocial';
import Cookies from 'universal-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/Home.module.css";

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
      <div className={`text-center ${styles.titulo}`}>
        <h1>FACTURAS</h1>
      </div>
      <div className='container text-center'>
        <ListadoObraSocial></ListadoObraSocial>

        <ListadoFactura></ListadoFactura>
      </div>

    </div>
  )
}

export default Factura
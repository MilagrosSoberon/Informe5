import React from 'react';
import Factura from "../assets/images/facturas.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className=''>
      <div className={`text-center ${styles.titulo}`}>
        <h1>AGREMIACIÓN GONUMI</h1>
      </div>
      <h2 className='mt-3'>Bienvenido! por favor seleccione la operación que desea realizar:</h2> 
      <div className="d-flex justify-content-center mt-5">
        <div className="card d-flex justify-content-center" style={{ width: '18rem' }}>
          {/* Uncommented and corrected img tag */}
          <img src={Factura} className="card-img-top" alt="facturas" />
          <div className="card-body">
            <h5 className="card-title">Cobrar facturas pendientes</h5>
            <p className="card-text">
              Haga click en el botón para poder ingresar y seleccionar facturas
            </p>
            <a href="./ListadoFacturas" className="btn btn-primary">Listado Facturas</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
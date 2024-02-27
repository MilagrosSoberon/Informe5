import logo from './logo.svg';
import './App.css';
import Home from "./screens/Home"
import Factura from "./screens/Factura"
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route element={<Home/>} path="/Agremiacion/Home" />          
      <Route element={<Factura/>} path="/Agremiacion/ListadoFacturas" />           
      </Routes>
     </Router>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Home from "./screens/Home"
import Factura from "./screens/Factura"

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route element={<Home/>} path="/Agremiacion/Home" />          
      <Route element={<Factura/>} path="/Agremiacion/ListadoFacturas" />  
      <Route path="/" element={<Navigate to="/Agremiacion/Home" />} />         
      </Routes>
     </Router>
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom'
import FormContainer from './components/forms/FormContainer'
import Layout from './components/layouts/Layout'
import ProductoDetalle from './components/pages/DetalleProducto'
import ItemListContainer from './components/Items/ItemListContainer'
import Contacto from './components/pages/Contacto';
import Dashboard from './components/forms/Dashboard';
import Login from './components/pages/Login';
import Registro from './components/pages/Registro';
import RutasProtegidas from './components/RutasProtegidas';
import ResultadosBusqueda from './components/search/ResultadoBusqueda'
import './App.css'
import Carrito from './components/pages/Carrito'



function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<h1>Inicio</h1>} />
          <Route path='/contacto' element={<Contacto/>} />
          <Route path='productos' element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<DetalleProducto />} />
          <Route path='/carrito' element={<Carrito />} />

          {/* Ruta protegida única para el dashboard */}
          <Route 
            path="/dashboard"
            element={
              <RutasProtegidas rolesPermitidos={["admin"]}>
                <Dashboard />
              </RutasProtegidas>
            }
          />

          <Route path="/busqueda" element={<ResultadosBusqueda />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />

        </Route>
        
      </Routes>
  
    </>

  );
}

export default App

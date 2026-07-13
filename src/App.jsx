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
import ResultadoBusqueda from './components/search/ResultadoBusqueda'
import './App.css'
import Carrito from './components/pages/Carrito'



function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <div className="inicio">
                <h1>Inicio</h1>

                <img
                  src="https://i.ibb.co/YTycQhCB/banner8.png"
                  alt="Banner"
                  className="bannerInicio"
                />
              </div>
            }
          />

          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="/carrito" element={<Carrito />} />

          <Route
            path="/dashboard"
            element={
              <RutasProtegidas rolesPermitidos={["admin"]}>
                <Dashboard />
              </RutasProtegidas>
            }
          />

          <Route path="/busqueda" element={<ResultadoBusqueda />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Route>
      </Routes>

    </>

  );
}

export default App;
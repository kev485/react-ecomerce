import { Routes, Route } from 'react-router-dom'
import FormContainer from './components/productos/FormContainer'
import Layout from './components/layouts/Layout'
import ProductoDetalle from './components/productos/DetalleProducto'
import ItemListContainer from './components/productos/ItemListContainer'
import Mensajito from './components/Mensajito'
import './App.css'



function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<h1>Inicio</h1>} />
          <Route path='/mensajito' element={<Mensajito/>} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
        </Route>
        
      </Routes>
      <ItemListContainer />
      <FormContainer />
    </>

  );
}

export default App

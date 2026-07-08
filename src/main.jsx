import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CarritoProvider } from './components/context/CartContext.jsx';
import { ProductosProvider } from "./components/context/ProductosContext.jsx";
import { AuthProvider } from './components/context/AuthContext.jsx';
import { BusquedaProvider } from "./components/context/BusquedaContext.jsx"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BusquedaProvider>
      <AuthProvider>
        <ProductosProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </ProductosProvider>
      </AuthProvider>
    </BusquedaProvider>
  </BrowserRouter>
)

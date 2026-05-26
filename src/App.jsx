import './App.css'
import Contador from './components/Contador'
import Footer from './components/layouts/Footer'
import FormContainer from './components/productos/FormContainer'
import Header from './components/layouts/Header'
import MainContainer from './components/layouts/MainContainer'
import Mensajito from './components/Mensajito'
import Nav from './components/layouts/Nav'



function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <MainContainer/>
      <Mensajito/>
      <Footer/>
      

    </>
  )
}

export default App

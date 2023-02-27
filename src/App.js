import './App.css';
import ListaClientes from './components/listaClientes';
import ListaProductos from './components/listaProductos';
import FormCliente from './components/formCliente';
import { useState } from 'react'
import FormProducto from './components/formProducto';
import Navbar from './components/navbar.js';
import { Login } from './components/login';

function App() {

  const [cliente, setCliente] = useState({
    clienteNombre: '',
    clienteTelefono: '',
    clienteEmail: '',
    clienteDni: '',
    empresaID: 1,
  })

  const [producto, setProducto] = useState({
    productoNombre: '',
    productoPrecio: 0,
    productoCodigo: '',
    empresaID: 1
  })

  return (
    <>
      <Navbar />
      <div className='row'>
        <div className='col-8 mt-2'>
          <ListaClientes />
          <ListaProductos />
        </div>
        <div className='col-4 mt-2'>
          <h4>Agregar Cliente</h4>
          <FormCliente cliente={cliente} setCliente={setCliente} />
          <h4>Agregar Producto</h4>
          <FormProducto producto={producto} setProducto={setProducto} />
        </div>
        <Login />
      </div>
    </>
  )
}

export default App;

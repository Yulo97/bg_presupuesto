import DataTable from "react-data-table-component";
import { useEffect, useState } from "react";

function ListaProductos(){
    const[ListaProductos, setListaProductos] = useState([])

    useEffect(() => {
        const getListaProductos = () => {
            fetch('http://localhost:9000/api/productos')
            .then(data => data.json())
            .then(data => setListaProductos(data))
            .catch(error => console.log(error))
        }
        getListaProductos()
    },[])

    const columns = [
        {
            name: 'ID',
            selector: row => row.productoID,
            sortable: true
            
        },
        {
            name: 'Nombre',
            selector: row => row.productoNombre,
        },
        {
            name: 'Precio',
            selector: row => row.productoPrecio,
            sortable: true
        },
        {
            name: 'Codigo',
            selector: row => row.productoCodigo,
        },

    ]

    return (
        <DataTable
        title={'Lista de Productos'}
        columns={columns}
        data={ListaProductos}
        highlightOnHover= {true}
        pointerOnHover={true}
        pagination 
        theme="dark"
        />
    )
}

export default ListaProductos;
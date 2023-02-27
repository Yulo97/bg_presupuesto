import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';

function ListaClientes() {

    const [listaClientes, setListaClientes] = useState([])

    useEffect(() => {
        const getListaClientes= () => {
            fetch('http://localhost:9000/api/clientes')
            .then(data => data.json())
            .then(data => setListaClientes(data))
            .catch(error => console.log(error))
        }
        getListaClientes()
    },[])

    //columnas de DataTable
    const columns = [
        {
            name: 'ID',
            selector: row => row.clienteID,
            sortable: true
        },
        {
            name: 'Nombre y Apellido',
            selector: row => row.clienteNombre,
        },
        {
            name: 'Telefono',
            selector: row => row.clienteTelefono,
        },
        {
            name: 'Email',
            selector: row => row.clienteEmail,
        },
        {
            name: 'DNI / CUIT',
            selector: row => row.clienteDni,
        },
        {
            name: 'Editar',
            selector: row => row.editarBtn,
            button: true,
            ignoreRowClick: true,
        },

    ];

    return (
        <DataTable
            title={'Lista de Clientes'}
            columns={columns}
            data={listaClientes}
            highlightOnHover= {true}
            pointerOnHover={true}
            pagination 
            actions = {[

            ]}
            // actions={[
            //     {
            //         icon: 'edit',
            //         tooltip: 'Editar Cliente',
            //         onClick: () => {
            //             alert('Eliminar Cliente')
            //         }
            //     }
            // ]}

        />
    );
};

export default ListaClientes;
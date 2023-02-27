function FormCliente({ cliente, setCliente }) {

    const handleChange = e => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        if (cliente.clienteNombre === '' || cliente.clienteTelefono === '' || cliente.clienteEmail === '' || cliente.clienteDni === '') {
            alert('Debes completar todos los campos')
            return
        }
        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cliente)
        }

        fetch('http://localhost:9000/api/clientes/nuevo-cliente', requestInit)
            .then(data => data.json())
            .then(data => console.log(data))

        setCliente({
            clienteNombre: '',
            clienteTelefono: '',
            clienteEmail: '',
            clienteDni: '',
            empresaID: 1,
        })
    }

    return (
        <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-3">
                <label htmlFor="nombreFormClient" className="form-label">Nombre y Apellido</label>
                <input name="clienteNombre" onChange={handleChange} type="text" className="form-control" id="nombreFormClient" placeholder="Nombre y Apellido" />
            </div>
            <div className="mb-3">
                <label htmlFor="emailFormClient" className="form-label">Direccion de Correo</label>
                <input name="clienteEmail" onChange={handleChange} type="email" className="form-control" id="emailFormClient" placeholder="Correo Electronico" />
            </div>
            <div className="mb-3">
                <label htmlFor="telFormClient" className="form-label">Telefono</label>
                <input name="clienteTelefono" onChange={handleChange} type="number" className="form-control" id="telFormClient" placeholder="Telefono" />
            </div>
            <div className="mb-3">
                <label htmlFor="dniFormClient" className="form-label">DNI / CUIT</label>
                <input name="clienteDni" onChange={handleChange} type="number" className="form-control" id="dniFormClient" placeholder="DNI / CUIT" />
            </div>
            <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
    )
}

// Es común utilizar la palabra "handle" como prefijo en los nombres de las funciones que se encargan de manejar eventos o acciones en una aplicación, para diferenciarlas de otras funciones que realizan otras tareas específicas.

export default FormCliente;
function FormProducto({ producto, setProducto }) {

    const handleChange = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        if (producto.productoNombre === '') {
            alert('Debes completar todos los campos')
            return
        }

        const requestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto)
        }

        fetch('http://localhost:9000/api/productos/agregar-producto', requestInit)
            .then(data => data.json())
            .then(data => console.log(data))

        setProducto({
            productoNombre: '',
            productoPrecio: 0,
            productoCodigo: '',
            empresaID: 1
        })
    }

    return (
        <form onSubmit={handleSubmit} className="p-3">
            <div className="mb-3">
                <label htmlFor="productoNombre" className="form-label">Nombre del Producto</label>
                <input name="productoNombre" onChange={handleChange} type="text" className="form-control" id="productoNombre" placeholder="Nombre del producto" />
            </div>
            <div className="mb-3">
                <label htmlFor="productoPrecio" className="form-label">Precio</label>
                <input name="productoPrecio" onChange={handleChange} type="number" className="form-control" id="productoPrecio" placeholder="Precio" />
            </div>
            <div className="mb-3">
                <label htmlFor="productoCodigo" className="form-label">Nombre y Apellido</label>
                <input name="productoCodigo" onChange={handleChange} type="text" className="form-control" id="productoCodigo" placeholder="Codigo" />
            </div>
            <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
    )
}

export default FormProducto;
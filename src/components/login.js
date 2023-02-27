import { useState } from "react"

export const Login = () => {
    const [usuario, setUsuario] = useState({
        usuarioUser: '',
        usuarioPass: '',
        usuarioNombre: '',
        usuarioEmail: '',
        usuarioTelefono: ''
    })

    const handleChange = e => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (usuario.usuarioUser === '' || usuario.usuarioPass === '') {
            console.log("Debes completar todos los campos")
            return
        }

        fetch(`http://localhost:9000/api/sesion/iniciar-sesion?user=${usuario.usuarioUser}&pass=${usuario.usuarioPass}`)
            .then(data => data.json())
            .then(data => {
                setUsuario(data);
            })
            .catch(error => console.log(error))
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="usuarioUser" className="form-label">Usuario</label>
                    <input name="usuarioUser" onChange={handleChange} type="text" className="form-control" id="usuarioUser" placeholder="Usuario" />
                </div>
                <div className="mb-3">
                    <label htmlFor="usuarioPass" className="form-label">Contraseña</label>
                    <input name="usuarioPass" onChange={handleChange} type="text" className="form-control" id="usuarioPass" placeholder="Contraseña" />
                </div>
                <button className="btn btn-primary" type="submit">Iniciar Sesion</button>
            </form>
            {usuario.usuarioUser && (
                <div>
                    <p>Usuario: {usuario.usuarioUser}</p>
                    <p>Nombre: {usuario.usuarioNombre}</p>
                    <p>Email: {usuario.usuarioEmail}</p>
                    <p>Teléfono: {usuario.usuarioTelefono}</p>
                </div>
            )}
        </>
    )
}


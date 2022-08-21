import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [errores, setErrores] = useState("");
    const [url, setUrl] = useState(process.env.REACT_APP_remoteHost + "api/users")

    // Generico / basico
    const getUsuariosEstaticos = () => {

        setUsuarios([
            {
                "id": 1,
                "email": "george.bluth@reqres.in",
                "first_name": "George",
                "last_name": "Bluth",
            },
            {
                "id": 2,
                "email": "janet.weaver@reqres.in",
                "first_name": "Janet",
                "last_name": "Weaver",
            },
            {
                "id": 3,
                "email": "emma.wong@reqres.in",
                "first_name": "Emma",
                "last_name": "Wong",
            },
        ])

    }

    const getUsuariosAjaxPms = () => {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(
                resultado_final => {
                    setUsuarios(resultado_final.data);
                    //console.log(usuarios);
                },
                error => {
                    console.log(error);
                }
            )
    }

    const getUsuariosAjaxAW = async () => {

        setTimeout(async () => {
            try {
                const peticion = await fetch(url);
                const datos = await peticion.json();

                setUsuarios(datos.data);
                setCargando(false);

                console.log(datos.data)

            } catch (error) {
                console.log(error.message);
                setErrores(error.message);
            }

        }, 2000)
    }

    useEffect(() => {
        // getUsuariosEstaticos();
        // getUsuariosAjaxPms();
        getUsuariosAjaxAW();
        //console.log(usuarios);

        return () => {

        };

    }, [])
    if (cargando == true) {
        // Cuando esta todo cargando
        return (
            <div className='cargando'>
                Cargando datos...
            </div>
        )
    }
    else if (errores != "") {
        // Cuando esta todo cargando
        return (
            <div className='errores'>
                {errores}
            </div>
        )
    } else if (cargando == false && errores == "") {
        // Cuando todo ha ido bien
        return (
            <div>
                <h2>Listado de usuarios via Ajax</h2>
                <ol>
                    {
                        usuarios.map(usuario => {
                            return (<li key={usuario.id}>
                                {/* <img src={usuario.avatar} width="20px" /> */}
                                {usuario.nombre} {usuario.apellido}</li>)
                        })
                    }
                </ol>
            </div >
        )
    }
}

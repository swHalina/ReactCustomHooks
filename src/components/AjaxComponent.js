import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);

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
        fetch("https://reqres.in/api/users?page=1")
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
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        const datos = await peticion.json();

        setUsuarios(datos.data);

        console.log(datos.data)
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
    } else {
        // Cuando todo ha ido bien
        return (
            <div>
                <h2>Listado de usuarios via Ajax</h2>
                <ol>
                    {
                        usuarios.map(usuario => {
                            return <li key={usuario.id}>{usuario.first_name} {usuario.last_name}</li>
                        })
                    }
                </ol>
            </div>
        )
    }
}

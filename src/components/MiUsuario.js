import { React, useState, useEffect } from 'react'
import { useAjax } from '../hooks/useAjax';

export const MiUsuario = () => {

    const [url, setUrl] = useState("https://reqres.in/api/posts");
    const [id, setId] = useState(1);
    const { datos, cargando } = useAjax(url, id);

    const getId = e => {
        let id = parseInt(e.target.value);
        // let url = "https://covid-193.p.rapidapi.com/countries" + id;
        setUrl("https://reqres.in/api/posts");
        setId(id);
    }

    return (
        <div>
            <h1>Mi usuario:</h1>
            <p>Datos del usuario:</p>
            <p>{cargando ? "Cargando..." : ""}</p>
            <p>{datos?.id} {datos?.name}</p>
            <input type="number" name="id" onChange={getId} />
        </div>
    )
}

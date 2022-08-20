import React, { useState, useEffect } from 'react'
import '../css/PruebasComponent.css';
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario] = useState("Maria Lucia");
    const [fecha, setFecha] = useState("01-01-1998");
    const [contador, setContador] = useState(0)

    const modUsuario = e => {
        setUsuario(e.target.value);
    }

    const cambiarFecha = e => {
        setFecha(Date.now);
    }

    useEffect(() => {
        console.log("Has cargado el componente PruebasComponent!!");

        return () => {

        };


    }, [])

    useEffect(() => {

        setContador(contador + 1);
        console.log("Monitoreando al usuario: " + contador);

        return () => {
            // console.log("has cambiado el usuario!!");
        };


    }, [usuario, fecha])

    return (
        <div>
            <h1>El efecto- Hook useEffect</h1>
            <strong className={contador >= 10 ? 'label label-green' : 'label'}>{usuario}</strong>
            <strong className='label'>{fecha}</strong>
            <p>
                <input type="text"
                    onChange={modUsuario}
                    placeholder="Cambia el nombre" />
                <button onClick={cambiarFecha}>Cambiar Fecha</button>
            </p>

            {usuario === "MARIA" && <AvisoComponent />}
        </div>
    )
}

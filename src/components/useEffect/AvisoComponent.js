import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        alert("El componente AvisoComponent está montado!!")

        return () => {
            alert("COMPONENTE DESMONTADO!!");
        };

    }, []);

    return (
        <div>
            <h1>Eventos en React</h1>
            <button onClick={e => {
                alert('Bienvenido!')
            }}>Dame click!</button>
        </div>
    )
}

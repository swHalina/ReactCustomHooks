import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React from 'react'

export const EventosComponente = () => {

    // const getInfo = e => {
    //     console.log("Hola, soy un evento click");
    // }

    function getInfo(e, nombre) {
        console.log("Hola, soy un evento click " + nombre);
    }

    calculateNewValue

    return (
        <div>
            <h1>Eventos en React</h1>
            <button onClick={e => getInfo(e, "Maria")} >Dame click!</button>
        </div>
    )
}

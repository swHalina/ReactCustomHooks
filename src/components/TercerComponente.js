import React from 'react'
import PropTypes from "prop-types";

export const TercerComponente = ({
    nombre,
    apellidos,
    ficha }) => {

    console.log(ficha);

    return (
        <div>
            <h1>Comunicación entre componentes</h1>
            <u>
                <li>{nombre}</li>
                <li>{apellidos}</li>
                <li>{ficha.grupo}</li>
                <li>{ficha.estado}</li>
            </u>
        </div>
    )
}

TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string.isRequired,
    ficha: PropTypes.object
}

TercerComponente.defaultProps = {
    nombre: "Lucia",
    apellidos: "Villanueva"
}

export const CuartoComponente = () => {
    return (
        <div>CuartoComponente</div>
    )
}

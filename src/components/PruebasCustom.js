import { useState } from "react";
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {

    const [input, setInput] = useState();
    const { estado, mayusculas, minusculas, concatenar } = useMayus(input);

    function obtieneTexto(e) {

        setInput(e.target.value);

    }

    return (
        <div>
            <h1>Probando componentes personalizados</h1>
            <h2>texto transformado: {estado}</h2>
            <hr />
            <h2>texto normal: {input}</h2>
            <input type="text" value={input} onInput={e => obtieneTexto(e)} />

            <button onClick={mayusculas}>Poner en masyuculas</button>
            <button onClick={minusculas}>Poner en minusculas</button>
            <button onClick={e => concatenar("- Probando Hooks Personalizados")}>Concatenar</button>

        </div>
    )
}
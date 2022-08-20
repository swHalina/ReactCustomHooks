import { useState } from 'react'

export const useForm = (objectoInicial = {}) => {

    const [formulario, setFormulario] = useState(objectoInicial);

    const serializarFormulario = (formulario) => {
        console.log(formulario);

        const formData = new FormData(formulario);

        const objetoCompleto = {};

        for (let [name, value] of formData) {
            objetoCompleto[name] = value;
        }
        console.log(objetoCompleto);
        return objetoCompleto;
    }

    const enviado = (e) => {
        e.preventDefault();
        //console.log(e.target)
        let curso = serializarFormulario(e.target);

        // let curso = {
        //     titulo: e.target.titulo.value,
        //     anio: e.target.anio.value,
        //     descripcion: e.target.descripcion.value,
        //     autor: e.target.autor.value,
        //     email: e.target.email.value
        // };

        setFormulario(curso);

        document.querySelector(".codigo").classList.add("enviado");

        //console.log("enviado");

    }

    const cambiado = ({ target }) => {
        const { name, value } = target;

        setFormulario({
            ...formulario,
            [name]: value
        })
    }

    return {
        formulario,
        enviado,
        cambiado
    }
}

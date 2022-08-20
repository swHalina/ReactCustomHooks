import { React } from 'react'
import { useForm } from '../hooks/useForm';
import './css/MiFormulario.css';

export const MiFormulario = () => {

    const { formulario, enviado, cambiado } = useForm({});

    return (
        <div>
            <h1>Formulario</h1>
            <p>Formulario para guardar un curso</p>
            <p>Curso guardado: {formulario.titulo}</p>
            <pre className='codigo'>{JSON.stringify(formulario)}</pre>

            <form onSubmit={enviado} className='mi-formulario'>
                <input type="text" name="titulo" onChange={cambiado} placeholder='Tiulo:' />
                <input type="number" name="anio" onChange={cambiado} placeholder='Año publicacion:' />
                <textarea name="descripcion" onChange={cambiado} placeholder='Descripcion:' />
                <input type="text" name="autor" onChange={cambiado} placeholder='Autor:' />
                <input type="email" name="email" onChange={cambiado} placeholder='Correo de contacto:' />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
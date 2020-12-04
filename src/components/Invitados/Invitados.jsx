import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import './Invitados.css'

const Invitados = () => {
    const {register, handleSubmit} = useForm()

    const [inputs, setInput] = useState([])
    const procesamientodeformulario = (datos, e) => {
        console.log(datos)
        setInput([
            ...inputs, 
            datos
        ])
        e.target.reset()
    }
    return (
        <div className="flex-container">
            <div className="container">
                <h1>This is a tarea2</h1>
                <form onSubmit = {handleSubmit(procesamientodeformulario)}>
                    <input name="nombre" ref={register} type="text" placeholder="Ingresar invitados"/>
                    <button>Agregar invitado</button>
                </form>
                <ul>
                    {
                        inputs.map((person, index)=> <li key = {index}> {person.nombre} </li>)
                    }

                </ul>
            </div>
        </div>
    )
}

export default Invitados
import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import './Invitados.css'

const Invitados = () => {
    //Creamos register y handleSubmit
    const {register, handleSubmit} = useForm()
    //Creamos un arreglo donde guardar los inputs
    const [inputs, setInput] = useState([])
    //Enviamos los datos si re realiza un evento, el cual es el boton y posteriormente limpiamos el Input
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
            <div className="container-f">
                <h1>Invitados a Mi fiesta</h1>
                <h3>Ingrese los nombres de quienes desea invitar a la fiesta:</h3>
                <form onSubmit = {handleSubmit(procesamientodeformulario)}>
                    <input name="nombre" ref={register} type="text" placeholder="Nombre de los invitados"/>
                    <button>Agregar invitado</button>
                </form>
                <ul>
                    {
                        //Tomamos el nombre - Input, y lo enviamos a la li
                        inputs.map((person, index)=> <li key = {index}> {person.nombre} </li>)
                    }

                </ul>
            </div>
        </div>
    )
}

export default Invitados
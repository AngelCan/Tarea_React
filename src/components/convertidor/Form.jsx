import React from 'react'
import { useForm } from 'react-hook-form'
//Las arroyfunction tiene funcionalidad, las clases no, solo pintan
const Form = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (e) => {
        const milla = 1.60934
        if(isNaN(e.input) === false){
            console.log(e)
            console.log(e.input)
            alert(e.input + "millas = " + milla * e.input + "Km")
        }else {
            alert("Es un caracter o cadena")
        }
    }
    return(
        <form onSubmit = {handleSubmit(onSubmit)}>
            <input className="form-control" ref={register} type="text" name="input"/>
            <button className="btn btn-primary mt-2">Convertir</button>
        </form>
    )
}
export default Form
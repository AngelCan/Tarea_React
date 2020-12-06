import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
//Las arroyfunction tiene funcionalidad, las clases no, solo pintan
const Form = () => {
    const {register, handleSubmit} = useForm()
    const [input2, setInput] = useState([]);
    const onSubmit = (e) => {
        setInput([e.input * 1.60934])
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
            <input className="form-control" ref={register} type="text" name="input"placeholder=" 1 Milla equivale a 1.60934 Km"/>
            <button className="btn btn-primary mt-2" onClick={() => setInput(input2 * 1.60934)}>Convertir</button>
            <h2>
                millas {input2}
            </h2>
        </form>
    )
}
export default Form
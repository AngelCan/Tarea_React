import React from 'react'
import Form from './Form.jsx'

class Card extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card text-white bg-dark mb-3 mt-4" style={{ maxWidth: "18rem" }}>
                            <div className="card-header">Convertidor de Millas a Kilometros</div>
                            <div className="card-body">
                                <label className="card-title">Introdusca las millas que quiera convertir a Km. 1 Milla equivale a 1.60934 Km</label>
                                <Form />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card
import { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const aoDigatado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigatado} required={props.obrigatorio} placeholder={`${props.placeholder}...`}></input>
        </div>
    )
}

export default CampoTexto
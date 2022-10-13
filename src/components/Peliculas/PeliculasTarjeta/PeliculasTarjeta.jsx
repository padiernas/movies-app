import React from 'react'
import './PeliculasTarjeta.css'

const PeliculasTarjeta = (props) => {
    return (
        <div className='contenedor-caratula'>
            <div className='cartula'>
                <img className='imagen-caratula' src= {props.src} alt={props.alt} />
                <h2 className='nombre-caratula'> {props.nombre} </h2>
            </div>
        </div>
    )
}

export default PeliculasTarjeta
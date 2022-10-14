import React from 'react'
import './PeliculasTarjeta.css'

const PeliculasTarjeta = ({src,alt,nombre,id}) => {
    return (
        <div className='contenedor-caratula'key={id}>
            <div className='cartula'>
                <img className='imagen-caratula' src= {src} alt={alt} />
                <h2 className='nombre-caratula'> {nombre} </h2>
            </div>
        </div>
    )
}

export default PeliculasTarjeta
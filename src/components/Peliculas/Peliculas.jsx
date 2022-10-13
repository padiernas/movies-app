import React from 'react'
import PeliculasTarjeta from './PeliculasTarjeta/PeliculasTarjeta'
import './Pelicula.css'

const peliculasInfo=[
  {
    id: "1",
    name: "Viernes 13",
    urlImagen: "https://static.nationalgeographic.es/files/styles/image_3200/public/01-hubble-heic1501a.jpg?w=1190&h=1242"
  }
]

const Peliculas = () => {
  return (
    <div className='contenedor-peliculas'>
        <PeliculasTarjeta src="https://www.themoviedb.org/t/p/w220_and_h330_face/q5v13A4zZ0ffXqDQMfxKcNu1xzQ.jpg" alt="Mujer con gato" nombre="Luck"/>

        <PeliculasTarjeta src="https://www.themoviedb.org/t/p/w220_and_h330_face/vaIREdPGZOnW9Jrs86mheVVlIQQ.jpg" alt="Hombre, mujer e hija caminando" nombre="Spy X Family"/>

        <PeliculasTarjeta src="https://www.themoviedb.org/t/p/w220_and_h330_face/t7CKYUNVdJePAfhvwSqlp4vsX68.jpg" alt="Tres mujeres brujas y sus victimas niños" nombre="Abra cadabra" />
    </div>
  )
}

export default Peliculas
import React from 'react'
import { useParams } from 'react-router'

export default function DetalleDeJuego() {
    const {idJuego} = useParams()  

  return (
    <div>
       Este es el Juego seleccionado {idJuego}
    </div>
  )
}

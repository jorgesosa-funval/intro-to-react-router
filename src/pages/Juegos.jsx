import React from 'react'
import { Link } from 'react-router'

export default function Juegos() {
    const games = [
        {
            "id": 1,
            "nombre": "Minecraft"
        },
        {
            "id": 2,
            "nombre": "League of Legends"
        },
        {
            "id": 3,
            "nombre": "World of Warcraft"
        },
        {
            "id": 4,
            "nombre": "Fortnite"
        },
        {
            "id": 5,
            "nombre": "Call of Duty"
        }
    ]
    return (
        <div>
            <h1>Lista de Juegos</h1>

            <div className='flex flex-wrap gap-4'>
                {games.map((game) => {
                    return (
                    <Link to={`/juegos/${game.nombre}`}>{game.nombre}</Link>
                )
                })}

            </div>

        </div>
    )
}

import React from 'react'
import { Link } from 'react-router'

export default function MealsGrid({ meals }) {

    return (
        <section className='grid grid-cols-2 p-4 gap-4'>
            { meals && 
                meals?.map((meal) => (
                    <Link to={`/meal/${meal?.idMeal}`} key={meal?.idMeal} className='relative rounded-md overflow-hidden shadow-lg hover:shadow-blue-700/50 bg-gray-200'>
                        <figure key={meal?.idMeal} className=''>
                            <img src={meal?.strMealThumb} alt="" className='w-full h-full object-cover hover:scale-95 transition-scale duration-300 rounded-md' />
                            <figcaption className='text-center text-gray-900 font-bold p-2 truncate'>{meal?.strMeal}</figcaption>
                        </figure>

                    </Link>
                ))
            }
        </section>
    )
}

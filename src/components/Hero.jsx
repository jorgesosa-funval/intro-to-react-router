import React from 'react'
import useData from '../hooks/useData'
import Search from './Search';

export default function Hero({onSearch}) {
    const { data} = useData(`https://www.themealdb.com/api/json/v1/1/random.php`);
    const { strMealThumb, strMeal } = data?.meals?.[0] || {};
    return (
        <section className='w-full max-h-90 overflow-hidden relative' id='home' >
            <img src={strMealThumb} alt="" className='w-full object-cover object-center' />
            <div className='absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center'>
                <h1 className='text-white text-4xl font-bold'>{strMeal}</h1>
            </div>
            <Search
                onSearch={onSearch}
            />
        </section>
    )
}

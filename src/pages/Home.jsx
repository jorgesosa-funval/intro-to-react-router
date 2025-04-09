import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import MealsGrid from '../components/MealsGrid'
import useData from '../hooks/useData'
export default function Home() {
  const { data } = useData("food.json");
  const [ filteredData, setFilteredData ] = useState([])
  useEffect(() => {
    console.log(data)
    setFilteredData(data?.meals)
  }, [ data ])

  function onSearch(value) { 
    const results = data?.meals.filter((meal) =>{
      return  meal.strMeal.toLowerCase().includes(value.toLowerCase())
    }) 
    setFilteredData(results)
  }
    console.log(filteredData)
  return (
    <main className='min-h-scren'>
      <Hero
        onSearch={onSearch}
      /> 
      <MealsGrid
        meals={filteredData}
      />
      <a href="/#home">HOla mundo</a>
    </main>
  )
}

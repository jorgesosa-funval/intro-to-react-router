import React from 'react'
import useData from '../hooks/useData';

export default function About() {
  const { data } = useData(`https://www.themealdb.com/api/json/v1/1/random.php`);
 
 
  return (
    <div className='h-screen bg-green-700'>
      {data?.meals?.[ 0 ]?.strYoutube} 
      {
         
      }
    </div>
  )
}

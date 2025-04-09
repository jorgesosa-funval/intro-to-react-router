import   { useState } from 'react'

export default function Search({onSearch}) {
  const [searchValue, setSearchValue] = useState("")
  console.log(searchValue)
  return (
    <div className='absolute bottom-10 left-0 w-full    flex items-center justify-center gap-4'>

    <input type="search" placeholder='Buscar...' className='p-2 rounded-md border border-gray-100 w-72 placeholder:text-gray-500 text-white' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>

    <button  className='bg-cyan-800 text-white p-2 rounded-md' onClick={()=>onSearch(searchValue)}>Buscar</button>
</div>
  )
}

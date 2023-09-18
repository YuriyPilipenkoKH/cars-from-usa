
import React from 'react'
import { MainCard } from '../components/MainCard/MainCard'
import FiltersBar from '../components/FiltersBar/FiltersBar'

const Catalogue = () => {
  return (
    <div className='wrapper'>

    <FiltersBar/>
    <MainCard/>
        
   </div>
  )
}

export default Catalogue
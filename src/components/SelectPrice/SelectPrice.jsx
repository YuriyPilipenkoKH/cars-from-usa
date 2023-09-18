
import React, { useState } from 'react'
import { Control, OptionsList, SelectWrapper } from '../SelectBrand/SelectBrand.styled'
import { FlatButton } from '../Button/Button'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

const SelectPrice = () => {
    const [selectedPrice, setSelectedPrice] = useState('To $')
    const [isSelected, setIsSelected] = useState(false)
    const prices = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150   ]

  return (
    <SelectWrapper>
         <p>Price/ 1 hour</p>
        <Control price ={prices[0]}>
            {selectedPrice }
            <FlatButton  onClick ={()=>  setIsSelected(!isSelected)}> 
            {isSelected ? <BiChevronUp size ={20}/> : <BiChevronDown size ={20}/>}
            </FlatButton>
        </Control>
       {isSelected &&  <OptionsList price ={prices[0]}>
         {prices.map((price, idx) => {
         return <li 
         key = {idx}
         onClick ={() => setSelectedPrice(price)}
         >{price}</li>
       }) }
        </OptionsList>}
    </SelectWrapper>
  )
}

export default SelectPrice
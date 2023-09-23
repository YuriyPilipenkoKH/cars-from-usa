import React, { useEffect, useState } from 'react'
import { Control, OptionWrapp, OptionsList, SelectWrapper } from '../SelectBrand/SelectBrand.styled'
import { FlatButton } from '../Button/Button'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { showFilterPrice } from '../../redux/filterSlice'
import { getFilter } from '../../redux/selectors'

const SelectPrice = ({searching, reset}) => {
  const {filterPrice} = useSelector(getFilter)
    const [selectedPrice, setSelectedPrice] = useState(filterPrice)
    const [isSelected, setIsSelected] = useState(false)
    const prices = [30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150 ]
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(showFilterPrice(selectedPrice))
  }, [dispatch, selectedPrice])

  useEffect(() => {
    setSelectedPrice(filterPrice)
    if(filterPrice === 0){
      setIsSelected(false)
    }
  }, [ searching, reset, filterPrice])

  return (
    <SelectWrapper>
         <p >Price/ 1 hour</p>
        <Control price ={prices[0]}>
            {filterPrice || 'To $'}
            <FlatButton  onClick ={()=>  setIsSelected(!isSelected)}> 
            {isSelected ? <BiChevronUp size ={20}/> : <BiChevronDown size ={20}/>}
            </FlatButton>
        </Control>
       {isSelected &&  
       <OptionWrapp  price ={prices[0]}>
         <OptionsList price ={prices[0]}>
           {prices.map((price, idx) => {
           return <li
           key = {idx}
           onClick ={() => {
            setSelectedPrice(price)
            setIsSelected(false)
          }}
           >{price}</li>
         }) }
          </OptionsList>
       </OptionWrapp>
        }
    </SelectWrapper>
  )
}

export default SelectPrice
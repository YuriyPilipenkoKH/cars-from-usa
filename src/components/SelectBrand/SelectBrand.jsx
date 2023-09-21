import { useEffect, useState } from 'react'
import {BiChevronDown, BiChevronUp} from 'react-icons/bi'
import { Control, OptionWrapp, OptionsList, SelectWrapper } from './SelectBrand.styled'
import { FlatButton } from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { showFilterBrand } from '../../redux/filterSlice'
import { getFilter } from '../../redux/selectors'


const SelectBrand = () => {
  const {filterBrand} = useSelector(getFilter)
    const [selectedBrand, setSelectedBrand] = useState(filterBrand)
    const [isSelected, setIsSelected] = useState(false)
    const dispatch = useDispatch()
    const carBrands = [
        'buick',
        'volvo',
        'hummer',
        'subaru',
        'mitsubishi',
        'lincoln',
        'gmc',
        'hyundai',
        'mini',
        'bentley',
        'Mercedes-Benz',
        'Aston Martin',
        'pontiac',
        'lamborghini',
        'audi',
        'BMW',
        'chevrolet',
        'chrysler',
        'kia',
        'Land Rover',
         ]

    useEffect(() => {
        dispatch(showFilterBrand(selectedBrand))
    }, [dispatch, selectedBrand])

    useEffect(() => {
      setSelectedBrand(filterBrand)
    }, [ filterBrand])

  return (
    <SelectWrapper>

        <p>Car brand</p>
        <Control> 
           { filterBrand || 'Enter the text' } 
            <FlatButton  onClick ={()=>  setIsSelected(!isSelected)}> 
            {isSelected ? <BiChevronUp size ={20}/> : <BiChevronDown size ={20}/>}
            </FlatButton>
        </Control>
       {isSelected &&  
       <OptionWrapp>
         <OptionsList  className={isSelected ? 'OptionsList show' : 'OptionsList'}>
           {carBrands.map((brand, idx) => {
           return <li
           key = {idx}
           onClick ={() => {
             setSelectedBrand(brand)
             setIsSelected(false)
          }}
           >{brand}</li>
         }) }
          </OptionsList>
       </OptionWrapp>
        }
    </SelectWrapper>
  )
}

export default SelectBrand
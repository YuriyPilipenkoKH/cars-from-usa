import { useEffect, useState } from 'react'
import {BiChevronDown, BiChevronUp} from 'react-icons/bi'
import { Control, OptionsList, SelectWrapper } from './SelectBrand.styled'
import { FlatButton } from '../Button/Button'
import { useDispatch } from 'react-redux'
import { showFilterBrand } from '../../redux/filterSlice'


const SelectBrand = () => {
    const [selectedBrand, setSelectedBrand] = useState("Enter the text")
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
        'jeep',
        ]

    useEffect(() => {
        dispatch(showFilterBrand(selectedBrand))
    }, [dispatch, selectedBrand])
        

  return (
    <SelectWrapper>
        <p>Car brand</p>
        <Control> 
            {selectedBrand }
            <FlatButton  onClick ={()=>  setIsSelected(!isSelected)}> 
            {isSelected ? <BiChevronUp size ={20}/> : <BiChevronDown size ={20}/>}
            </FlatButton>
        </Control>
       {isSelected &&  <OptionsList>
         {carBrands.map((brand, idx) => {
         return <li 
         key = {idx}
         onClick ={() => setSelectedBrand(brand)}
         >{brand}</li>
       }) }
        </OptionsList>}
    </SelectWrapper>
  )
}

export default SelectBrand
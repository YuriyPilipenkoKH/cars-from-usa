
import { useSelector } from "react-redux"
import { getFilter } from "../../redux/selectors"
import { Button, FlatButton } from "../Button/Button"
import SelectBrand from "../SelectBrand/SelectBrand"
import SelectMileage from "../SelectMileage/SelectMileage"
import SelectPrice from "../SelectPrice/SelectPrice"
import { FilfersWrap, FilterButtonWrapp } from "./FiltersBar.styled"
import { iconReset } from "../../images/icons"



const FiltersBar = ({search, reset, searching}) => {
  const {
    filterBrand, 
    filterPrice,
    filterFrom,
    filterTo
  } = useSelector(getFilter)

  return (
    <FilfersWrap>
        <SelectBrand searching={searching} reset={reset}/>
        <SelectPrice searching={searching} reset={reset}/>
        <SelectMileage/>    
        <FilterButtonWrapp>
          {  (filterBrand || filterPrice >0 || filterFrom || filterTo ) &&    (
          <FlatButton
          onClick={reset}
          className='reset'>
            {iconReset}
          </FlatButton>
           )}
          <Button
            onClick={search}
           className = 'searchBtn'>Search</Button>
        </FilterButtonWrapp>

    </FilfersWrap>
  )
}

export default FiltersBar
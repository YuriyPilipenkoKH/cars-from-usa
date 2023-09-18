import { useDispatch } from "react-redux"
import { Button } from "../Button/Button"
import SelectBrand from "../SelectBrand/SelectBrand"
import SelectMileage from "../SelectMileage/SelectMileage"
import SelectPrice from "../SelectPrice/SelectPrice"
import { FilfersWrap } from "./FiltersBar.styled"



const FiltersBar = () => {

    const dispatch = useDispatch()
  return (
    <FilfersWrap>
        <SelectBrand/>
        <SelectPrice/>
        <SelectMileage/>    
        <Button className = 'searchBtn'>Search</Button>
    </FilfersWrap>
  )
}

export default FiltersBar
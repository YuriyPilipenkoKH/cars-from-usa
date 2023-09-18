import { useDispatch } from "react-redux"
import { SelectWrapper } from "../SelectBrand/SelectBrand.styled"
import { MileageControl } from "./SelectMileage.styled"
import { showFilterFrom, showFilterTo } from "../../redux/filterSlice"



const SelectMileage = () => {
    const dispatch = useDispatch()
  return (
    <SelectWrapper>
    <p>Сar mileage / km</p>
    <MileageControl> 
        <label>From
            <input
            onChange={(e) => dispatch(showFilterFrom(e.target.value))}/>
        </label>
        <label>To
            <input
            onChange={(e) => dispatch(showFilterTo(e.target.value))}/>
        </label>
      </MileageControl>

</SelectWrapper>
  )
}

export default SelectMileage
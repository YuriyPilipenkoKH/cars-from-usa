import { useDispatch, useSelector } from "react-redux"
import { SelectWrapper } from "../SelectBrand/SelectBrand.styled"
import { MileageControl } from "./SelectMileage.styled"
import { showFilterFrom, showFilterTo } from "../../redux/filterSlice"
import { getFilter } from "../../redux/selectors"



const SelectMileage = () => {
  const {filterFrom, filterTo} = useSelector(getFilter)
    const dispatch = useDispatch()
  return (
    <SelectWrapper>
    <p>Сar mileage / km</p>
    <MileageControl> 
        <label>From
            <input
            onChange={(e) => dispatch(showFilterFrom(e.target.value))}
            value={filterFrom}
            />

        </label>
        <label>To
            <input
            onChange={(e) => dispatch(showFilterTo(e.target.value))}
            value={filterTo}
            />
        </label>
      </MileageControl>

</SelectWrapper>
  )
}

export default SelectMileage


import React, { useState } from 'react'
import { StyledLabel, StyledSelect } from './FiltersBar.styled';

const FiltersBar = () => {
    const [selectedModel, setSelectedModel] = useState('Enter the text'); // State to track the selected car model

    // Event handler to update the selected model when the dropdown changes
    const handleModelChange = (event) => {
      setSelectedModel(event.target.value);
    };
  return (
    <div>
   
      <StyledLabel htmlFor="carModel">Car brand</StyledLabel>
      <StyledSelect id="carModel" onChange={handleModelChange} value={selectedModel }>
        
        <option value="buick">Buick</option>
        <option value="volvo">Volvo</option>
        <option value="hummer">Hummer</option>
        <option value="subaru">Subaru</option>
        <option value="mitsubishi">Mitsubishi</option>
        <option value="nissan">Nissan</option>
        <option value="lincoln">Lincoln</option>
        <option value="gmc">GMC</option>
        <option value="hyundai">Hyundai</option>
        <option value="jeep">Jeep</option>
      </StyledSelect>
      {/* <p>You selected: {selectedModel}</p> */}
    </div>
  )
}

export default FiltersBar
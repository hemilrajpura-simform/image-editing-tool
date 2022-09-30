import React, { useState } from 'react'

const Slider = ({ FilterName,getValue }) => {
  const [FilterValue, setFilterValue] = useState(100);
  const SliderOnChangeHandler = (e) => {
    setFilterValue(e.target.value)
    getValue(FilterValue)
  }

  return (
    <div className='SliderSection'>
      <input type="range" id={FilterName} onChange={SliderOnChangeHandler} min={-100} max={200} value={FilterValue} />
      <span>{FilterValue}</span>
    </div>
  )
}

export default Slider
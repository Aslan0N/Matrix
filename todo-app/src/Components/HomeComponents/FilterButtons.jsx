import React from 'react'

const FilterButtons = ({allButtons, filterCategory}) => {
  return (
    <>
    {
        allButtons.map((button, index)=>{
            return (
                <button onClick={()=> filterCategory(button)} key={index} >{button}</button>
            )
        })
    }
    </>
  )
}

export default FilterButtons
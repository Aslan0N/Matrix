import React from 'react'

const FilterButtons = ({allButtons, filterCategory}) => {
  return (
    <>
    {
        allButtons.map((button, index)=>{
            return (
                <button onClick={()=> filterCategory(button)}  >{button}</button>
            )
        })
    }
    </>
  )
}

export default FilterButtons
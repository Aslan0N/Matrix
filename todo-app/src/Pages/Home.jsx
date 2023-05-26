import React, { useEffect, useState } from 'react'
import FilterButtons from '../Components/HomeComponents/FilterButtons'
import FilterMenu from '../Components/HomeComponents/FilterMenu'
import axios from 'axios'

const Home = () => {

    
    const [myData, setMyData] = useState([])

    const allButtons = ['All', ...new Set(myData.map((item)=> item.author))]

    const [buttons, setButtons] = useState([allButtons])


    useEffect(()=>{
        axios.get('https://inshorts.deta.dev/news?category=science')
        .then(res=> setMyData(res.data.data))
    },[])

    const filterCategory = (category)=>{
        if(category == 'All'){
            setMyData(myData)
            // return
        }

        const filteredData = myData.filter((item)=> item.author == category)
        setMyData(filteredData)
    }


  return (
    <>
        <FilterButtons allButtons={allButtons} filterCategory={filterCategory}  />
        <FilterMenu myData={myData} />
    </>
  )
}

export default Home
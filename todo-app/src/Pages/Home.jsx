import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const categories = ['all', 'business', 'sports', 'world', 'politics', 'technology', 'startup',
    'entertainment', 'miscellaneous', 'hatke', 'science','automobile']

    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
 
    const filterCategory = (category) =>{

        axios.get(`https://inshorts.deta.dev/news?category=${category}`)
        .then(res=>{
             setData(res.data.data)
             setLoad(true)
            })
            setLoad(false)
        

    }

  return (
    <>
        <section>
            {
                categories.map((category,index)=>{
                    return <button className='btn btn-warning m-2 text-white fw-bold' key={index} onClick={()=> filterCategory(category)}>{category}</button>
                })
            }
        </section>
        <section>
            {
               !load ? 'La bi dur açılaaayi..' :  data.map((item,index)=>{
                   return <img width={150} className='m-3' key={index} src={item.imageUrl} alt="" />
                })
            }
        </section>
    </>
  )
}

export default Home
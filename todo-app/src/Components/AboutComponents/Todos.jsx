import React from 'react'

const Todos = ({myTodos, setMyTodos}) => {

  const deleteTodo = (item)=>{
    const newTodos = myTodos.filter(todo => todo !== item )
    setMyTodos(newTodos)
  }

  return (
    <>
    <section id="todos">
      <ul>
        {
          myTodos?.map((item,index)=>{
            return <li key={index} >{item} <button onClick={()=> deleteTodo(item)} >X</button> </li>
          })
        }
      </ul>
    </section>
      
    </>
  )
}

export default Todos
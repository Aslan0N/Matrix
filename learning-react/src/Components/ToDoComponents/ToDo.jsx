import React, { useState, useReducer } from 'react'

const ToDo = () => {

    function reducer (state, action){
        switch(action.type) {
            case 'SET_TODO' :
                return{
                    ...state,
                    todo:action.value
                }
            case 'ADD_TODO':
                return{
                    ...state,
                    todo:'',
                    todos:[
                        ...state.todos,
                        action.todo
                    ]
                }
                case 'DEL_TODO':
                return{
                    ...state,
                    todos:state.todos.filter((todo,index)=>todo !== action.todo)
                }
        }
    }

    const [state, dispatch] = useReducer(reducer, {
        todos:[],
        todo:''

    })

    // const [todos, setTodos]=useState([]);
    // const [todo, setTodo] = useState('')

    const addingTodo = (e)=>{
        e.preventDefault();
        dispatch({
            type:'ADD_TODO',
            todo:state.todo
        })
    }

    const onChange= (e)=>{
        dispatch({
            type:'SET_TODO',
            value:e.target.value
        })
    }
    const deleteItem = ()=>{
        dispatch({
            type:'DEL_TODO',
            value:state.todos
        })
    }

  return (
    <>
        <form onSubmit={addingTodo}>
            <input type="text" value={state.todo} onChange={onChange} />
            <button disabled={!state.todo}>Add</button>
        </form>
        <ul>
            {
                state.todos.map((item,index)=>{
                    return <li key={index}>{item} <button onClick={deleteItem} >x</button></li>
                })
            }
        </ul>
    </>
  )
}

export default ToDo
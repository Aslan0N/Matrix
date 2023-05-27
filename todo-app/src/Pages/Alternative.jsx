import React, { useEffect, useState } from "react";

const Alternative = () => {
  const [todos, setTodos] = useState(localStorage.getItem("myTodo") ? JSON.parse(localStorage.getItem('myTodos')):[]);
  
  useEffect(()=>{
      localStorage.setItem('myTodo', JSON.stringify('todos'))
    }, [todos])
    const [todo, setTodo] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (item)=>{
    setTodos(todos.filter((todo) => todo !== item))

  }

  return (
    <>
      <section id="alternative">
        <div className="todo-con">
        <form onSubmit={submitForm}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button disabled={!todo}>Add</button>
        </form>
        <ul>
          {todos.map((todo, index) => {
            return <li key={index}>{todo} <button onClick={()=> deleteTodo(todo)}>x</button></li>;
          })}
        </ul>
        </div>
      </section>
    </>
  );
};

export default Alternative;

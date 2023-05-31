import React, { useEffect, useState } from "react";

const Alternative = () => {
  const [todos, setTodos] = useState(localStorage.getItem("todos")? JSON.parse(localStorage.getItem("todos")): []);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  
  const [todo, setTodo] = useState("");
  
  const [icon, setIcon] = useState(false)

  const submitForm = (e) => {
    e.preventDefault();
    if(
      todo.trim() !== ""
      )
      setTodos([...todos, todo]);
      setTodo("");
  };

  const deleteTodo = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  };
  const clearAll = ()=>{
    setTodos([])
  }
  const editTodo = ()=>{
           setIcon((prev)=> !prev)
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
              placeholder="Add todo"
              autoComplete="on"
            />
            <button disabled={!todo}>Add</button>
          </form>
          <ul>
            {todos.map((todo, index) => {
              return (
                <li key={index}>
                  <input type="text" value={todo} disabled={!icon } />
                  <button onClick={editTodo} className={ !icon ? "fa-solid  fa-pen-to-square" : "fa-solid fa-check"}></button>
                  <button onClick={() => deleteTodo(todo)} className="fa-solid  fa-x"></button>
                </li>
              );
            })}
          </ul>
        <button onClick={clearAll}>Clear All</button> <span>{todos == '' ? 'No todo ' : `${todos.length} Todo` }</span>
        </div>
      </section>
    </>
  );
};

export default Alternative;

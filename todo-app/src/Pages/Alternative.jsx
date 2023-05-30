import React, { useEffect, useState } from "react";

const Alternative = () => {
  const [todos, setTodos] = useState(
    localStorage.getItem("myTodo")
      ? JSON.parse(localStorage.getItem("myTodos"))
      : []
  );
  const [icon, setIcon] = useState(false)

  useEffect(() => {
    localStorage.setItem("myTodo", JSON.stringify("todos"));
  }, [todos]);
  const [todo, setTodo] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  const deleteTodo = (item) => {
    setTodos(todos.filter((todo) => todo !== item));
  };
  const clearAll = ()=>{
    setTodos([])
  }
  let editItem = false
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
            />
            <button disabled={!todo}>Add</button>
          </form>
          <ul>
            {todos.map((todo, index) => {
              return (
                <li key={index}>
                  <input type="text" value={todo} disabled={icon ? 'disabled' : ''} />
                  <button onClick={editTodo} className={ icon ? "fa-solid  fa-pen-to-square" : "fa-solid fa-check"}></button>
                  <button onClick={() => deleteTodo(todo)}>x</button>
                </li>
              );
            })}
          </ul>
        <button onClick={clearAll}>Clear All</button>
        </div>
      </section>
    </>
  );
};

export default Alternative;

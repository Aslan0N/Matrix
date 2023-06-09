import React, { useState } from "react";

const AddingToDo = ({ myTodos, setMyTodos }) => {
  const [todos, setTodos] = useState();

  const formSubmit = (e) => {
    e.preventDefault();
   
    setMyTodos([...myTodos, todos]);
    setTodos("");
    console.log(myTodos);

  };

  return (
    <><section id="todo">
         <div className="con">
      <form onSubmit={formSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            value={todos}
            onChange={(e) => setTodos(e.target.value)}
          />
        </div>
        <button type="submit" disabled={!todos} className="btn btn-primary">
          Submit
        </button>
      </form>
      </div>
      
    </section>
     
    </>
  );
};

export default AddingToDo;

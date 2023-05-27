import React, { useEffect, useState } from "react";
import AddingToDo from "../Components/AboutComponents/AddingToDo";
import Todos from "../Components/AboutComponents/Todos";

const About = () => {
  const [myTodos, setMyTodos] = useState(localStorage.getItem("myTodos")? JSON.parse(localStorage.getItem("myTodos")):[]);

  useEffect(()=>{
    localStorage.setItem("myTodos",JSON.stringify("myTodos"))
  },[myTodos])

  return (
    <>
      <AddingToDo myTodos={myTodos} setMyTodos={setMyTodos} />
      <Todos myTodos={myTodos} setMyTodos={setMyTodos} />
    </>
  );
};

export default About;

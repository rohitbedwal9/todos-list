import "./App.css";
import Header from "./MyComponenets/Header";
import { Todos } from "./MyComponenets/Todos";
import { Footer } from "./MyComponenets/Footer";
import { AddTodo } from "./MyComponenets/AddTodo";
import { About } from "./MyComponenets/About";
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete = (todo) => {
    console.log("I am onDelete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // useEffect(()=>{
  //   fetch("https://62ebb27a705264f263de57bc.mockapi.io/api/todo/todos")
  //   .then((response) => response.json())
  //   .then((data) => {console.log(data) ; setTodos(data);})
  // },[])
  
  const addTodo = (title, desc) => {
    console.log("I am Adding this Todo ", title, desc);
    let sno = todos.length;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <BrowserRouter>
        <Header title="TodosList" />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {Addtodo} from "./MyComponents/Addtodo";
import React, { useState } from 'react';

function App() {
    const onDelete = (todo) => {
        console.log("I am onDelete of todo", todo);
        let index=todos.indexOf(todo);
        // deleting this way in react does not work
        // todos.splice(index,1);
        // console.log("deleted",todos);
        setTodos(todos.filter((e)=>{
            return e!==todo;
        }));
    }
    const [todos, setTodos] = useState([
        {
            sno:1,
            title:"Go to the market",
            desc:"You need to go to the market to buy groceries"
        },
        {
            sno:2,
            title:"Go to the mall",
            desc:"You need to go to the mall to buy clothes"   

        },
        {
            sno:3,
            title:"Go to the school",
            desc:"You need to go to the school to drop the kids"
        },
    ]);

  return (
     <>
        <Header title="My Todos List" searchBar={true}/>
        <Addtodo/>
        <Todos todos={todos} onDelete={onDelete}/>
        <Footer/>      
     </>
      );
}

export default App;

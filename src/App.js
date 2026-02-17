import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { Addtodo } from "./MyComponents/Addtodo";
import React, { useState, useEffect } from 'react';

function App() {

    // Load todos from localStorage when app starts
    const [todos, setTodos] = useState(() => {
        let savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });

    // Save todos to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Delete function
    const onDelete = (todo) => {
        console.log("Deleting todo:", todo);
        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
    };

    // Add function
    const addTodo = (title, desc) => {
        let sno;
        if (todos.length === 0) {
            sno = 1;
        } else {
            sno = todos[todos.length - 1].sno + 1;
        }

        const myTodo = {
            sno: sno,
            title: title,
            desc: desc
        };

        setTodos([...todos, myTodo]);
    };

    return (
        <>
            <Header title="My Todos List" searchBar={true} />
            <Addtodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
            <Footer />
        </>
    );
}

export default App;



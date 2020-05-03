import React from 'react';
import ToDo from './ToDo';

let toDoData = [
    {
        id: 1,
        title: "Walk Dog"
    },
    {
        id: 2,
        title: "Make food"
    },
    {
        id: 3,
        title: "Eat Food"
    },
    {
        id: 4,
        title: "Sleep"
    },
   
]
const ToDoList = (props) => <div>
    <h1>Todo List</h1>
    <ul>
        {toDoData.map((item) =>
        <ToDo title={item.title} key={item.id}/>)}
    </ul>
</div>

export default ToDoList;
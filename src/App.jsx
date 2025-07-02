import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Welcomemsg from"./components/welcomemsg"

import AppName from "./components/AppName";

import Input from "./components/input.jsx";
import "./App.css";
import TodoItems from "./Todoitems.jsx";

function App() {




const [todoItems, setTodoItems]=useState([]);

const onNewItem=(itemName,itemDueDate)=>{
  console.log(`new item added :${itemName}Date:${itemDueDate}`);

//now declaring new string to store the added value ---


console.log(`new item added:${itemName} Date:${itemDueDate}`)
  const newTodoItems=[...todoItems,{name:itemName,
    duedate:itemDueDate}];
    setTodoItems(newTodoItems);

}

const handleDeleteItem=(todoItemName)=>{
  const newTodoItems=todoItems.filter(item=>item.name!==todoItemName);
  setTodoItems(newTodoItems);
 
}
  return (
    <center className="todo-container">
      <AppName />
      <Input onNewItem={onNewItem}/>
     {todoItems.length === 0 && <Welcomemsg />}

     <TodoItems todoItems={todoItems}onDeleteClick={handleDeleteItem}>

     </TodoItems>
    </center>
  );
}

export default App;

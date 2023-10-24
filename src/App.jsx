import './App.css'
import TodoList from './components/TodoList'
import Home from './components/Home';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function App() {

  const [value, setValue] = useState("Home");

  const handleChange = (event, value) => {
    console.log("value is " + value);
    setValue(value);
  }

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Home" value="Home" />
        <Tab label="Add todo" value="ToDoList" />
      </Tabs>
      {value === "Home" && <Home />}
      {value === "ToDoList" && <TodoList />}
    </div>
  )
}



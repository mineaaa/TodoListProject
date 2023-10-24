import * as React from 'react';
import { useState } from 'react';
import TodoListGrid from "./TodoListGrid";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



export default function TodoList() {

    const [desc, setDesc] = useState({ description: "", date: "", priority: "" });
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setDesc({ ...desc, [event.target.name]: event.target.value });
    };

    const addTodo = () => {
        setTodos([...todos, desc]);
        setDesc({ description: "", date: "", priority: "" });
    }

    const deleteTodo = (index) => {
        const changedTodo = todos.filter((desc, i) => i !== index);
        setTodos(changedTodo);
    }

    const handleDateChange = (newDate) => {
        setDesc({ ...desc, date: newDate });
    }

    return (
        <>
            <h1>💗🌷 Todo List 🌷💗</h1>
            <input type="text" name="description" onChange={inputChanged} value={desc.description} />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    name="date"
                    value={desc.date}
                    onChange={handleDateChange}
                />

            </LocalizationProvider>
            <input type="text" name="priority" onChange={inputChanged} value={desc.priority} />


            <button onClick={addTodo}>Lisää</button>


            <TodoListGrid todos={todos} deleteTodo={deleteTodo} />
        </>
    )

}





import { useState } from "react";
import TodoTable from "./components/TodoTable";


export default function TodoList() {

    const [desc, setDesc] = useState({ description: "", date: "" });
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setDesc({ ...desc, [event.target.name]: event.target.value });
    };

    const addTodo = () => {
        setTodos([...todos, desc]);
        setDesc({ description: "", date: "" });
    }

    const deleteTodo = (index) => {
        const changedTodo = todos.filter((desc, i) => i !== index);
        setTodos(changedTodo);
    }

    return (
        <>
            <h1>💗🌷 Todo List 🌷💗</h1>
            <input type="text" name="description" onChange={inputChanged} value={desc.description} />
            <input type="date" name="date" onChange={inputChanged} value={desc.date} />

            <button onClick={addTodo}>Add</button>

            <TodoTable todos={todos} onDelete={deleteTodo} />
        </>
    )

}



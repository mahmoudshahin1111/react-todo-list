import { useEffect, useState } from "react";
import "./TodoForm.css";


const TodoForm = ({ editTodo, onSubmit }) => {
    const [todo, setTodo] = useState('');
    const todoChangeHandler = (e) => {
        setTodo(e.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(todo);
        setTodo('');
    }
    useEffect((e) => {
        if (editTodo) {
            setTodo(editTodo);

        }
    }, [editTodo]);
    return (
        <form className="todo-form"  onSubmit={(event) => handleSubmit(event)}>
            <input  
            className="name-input" 
            name="name" 
            value={todo} 
            onChange={(e) => todoChangeHandler(e)} />
            <button className="save-btn" type="submit" >Save</button>
        </form>
    );
}





export default TodoForm;

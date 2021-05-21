import { useEffect, useState } from "react";



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
        <form  onSubmit={(event) => handleSubmit(event)}>
            <input  
            name="name" 
            value={todo} 
            onChange={(e) => todoChangeHandler(e)} />
            <button  type="submit" >Save</button>
        </form>
    );
}





export default TodoForm;

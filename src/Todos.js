import "./Todos.css";


const Todos = ({ todos, onEdit, onDelete }) => {
    const handleEditClicked = (todoIndex) => {
        onEdit(todoIndex);
    }
    const handleDeleteClicked = (todoIndex) => {
        onDelete(todoIndex);
    }
    return (
        <ul className="todos">
            {
                todos.map((todo, index) => (
                    <li className="todo" key={index}>
                        <p className="todo-content">{todo}</p>
                        <div className="todo-controls">
                        <button className="edit-btn" onClick={() => handleEditClicked(index)}>Edit</button>
                        <button className="delete-btn" onClick={() => handleDeleteClicked(index)}>Delete</button>
                        </div>
                    </li>
                ))

            }
        </ul>
    );
}

export default Todos;

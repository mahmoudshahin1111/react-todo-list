
const Todos = ({ todos, onEdit, onDelete }) => {
    const handleEditClicked = (todoIndex) => {
        onEdit(todoIndex);
    }
    const handleDeleteClicked = (todoIndex) => {
        onDelete(todoIndex);
    }
    return (
        <ul>
            {
                todos.map((todo, index) => (
                    <li key={index}>
                        <p>{todo}</p>
                        <button onClick={() => handleEditClicked(index)}>Edit</button>
                        <button onClick={() => handleDeleteClicked(index)}>Delete</button>
                    </li>
                ))

            }
        </ul>
    );
}

export default Todos;

const Todo = ({ todo, deleteTodo, upDate }) => {

    const { title, description, state, priority, id } = todo
    return (
        <li>
            <div>
                <div>
                    <h3 className={`${state && 'text-decoration-line-through'}`}>{title}</h3>
                    <p>{description}</p>
                
                <div className="d-flex gap-2">
                    <button onClick={() => deleteTodo(id)} className="btn btn-sm btn-danger">Eliminar</button>
                    <button onClick={() => upDate(id)} className="btn btn-sm btn-warning">Actualizar</button>
                    <button className="badge text-bg-primary">{priority && 'Prioritario'}</button>
                </div>
                </div>
                

            </div>
        </li>
    )
}

export default Todo
import Todo from "./Todo";
import Swal from "sweetalert2";




const Todos = ({ todos, deleteTodo, upDate }) => {
    

    return(
            <div>
                <h2>Todos</h2>
                <ul>
                    {
                      todos.map((todo) => (
                        //<li key={todo.id}>{todo.title}</li>
                        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} upDate={upDate}/>
                      ))}
                                            
                     {todos.length === 0 && 

                    <h5>VACIO</h5>     
                     
                     }
                     
                </ul>


            </div>
       )
       
}

export default Todos;
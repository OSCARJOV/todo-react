import { useEffect, useState } from "react"
import Controlado from "../componenets/Controlado"
import BotonState from "../componenets/ejemp"
import NoControlado from "../componenets/NoControlado"
import Todos from "../componenets/Todos"


const array = JSON.parse(localStorage.getItem('todos')) || []; //si no le pongo esto se borra todo al actualizar por que llama el array vacio



const App = () => {

const [todos, setTodos] = useState(array)

useEffect(() => {  //se ejecuta una sola vez todo lo que haga en [todos]
    localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);



const addTodo = (todo) => {  // agrego mas todos
    return(
        setTodos([...todos, todo])
    )
}

const deleteTodo = id => {
        const newArray = todos.filter(todo => todo.id !== id)
        setTodos(newArray)
    
}

const upDate = id => {
    const newArray = todos.map(todo => {
        if(todo.id === id){
            todo.state = !todo.state
    }
    return todo
    }) 
    setTodos(newArray)
}


const orden = (argum) => {
    return argum.sort ((a,b) => {
        if(a.priority == b.priority) return 0;
        if(a.priority) return -1;
        if(!a.priority) return 1;
    })
}
    return(
        <div className="container">
            <h1>Formularios</h1>
        <NoControlado/>
        <h1>CONTROLADO</h1>
        <Controlado addTodo={addTodo}/>

        <BotonState/>
       
        <Todos todos={orden(todos)} deleteTodo={deleteTodo} upDate={upDate}/>

        </div> 
        
        
        
    )
}

export default App 
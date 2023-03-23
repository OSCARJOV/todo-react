import { useState } from "react"
import Swal from "sweetalert2";


const Controlado = ({addTodo}) => {

    //const form = document.querySelector('#form') //  esto se usaba para tomar el id del form

   // const [title, setTitle] = useState('Todo # 1')
   // const [description, setDescription] = useState('Descripcion 1')
   // const [state, setState] = useState("Completado")
const [todo, setTodo] = useState({  // este objeto reeemplaza los suseState anteriores
        title:"",             // Aqui van los name   
        description:"",
        state: "pendiente",
        priority: true,
});

const [errores, SetErrores]= useState(false)
//SetErrores(false)

    const handleSubmit = (e) => {
        e.preventDefault() // evita que se borre el click
       console.log(todo.state,todo.title, todo.description);
    
       const {state, description} = todo

        if(state.trim() === '' || description.trim() === '') { // O se puede poner el ! y quitar los ===
        return Swal.fire({
            icon: " error ",
            title: "Oops...",
            text: "Titulo y descripcion oblogatorios!",
        })

      //  console.log("campo vacio");
      //  SetErrores(true)
      //  return
    
      // }else{
      //  console.log("campos llenos");
      //  SetErrores(false)
       }

       addTodo({
        id: Date.now(),
        ...todo, 
        state: state === 'completado'
       })
        
       Swal.fire({
         position: "center",
         icon: "success",
         title:"Todo agregado ",
         timer: 1200,
       })

       
    }



    const handleChange = (e) => {
        console.log(e.target);
     //   console.log(e.target.name);
     //   const pro = e.target.name
        setTodo({
            ...todo,
           // [e.target.name]: e.target.checkbox  //nombre de prop. de los objetos
           [e.target.name]: e.target.type === "checkbox"
                            ? e.target.checked
                            : e.target.value,
        })
    }
    
                                                                  // ref="form" se usa en lugar del id            
const PintarError = () => (
    <div className="alert alert-danger">Los campos son obligatorios</div>
)
     // el <div> y el {errores... } aplica para cuando la comprobacion se hace con el if() sin usar el Swaf                                                              
    return (
        <div>
        {errores && <PintarError />}
        <form onSubmit={(e) => handleSubmit(e)}>
            <input type="text" 
                   placeholder="Ingrese todo"
                   className="form-control mb-2" 
                   name="title" 
                   value={todo.title}
                   onChange={handleChange}
                   //  onChange={e => setTodo({ ...todo, title: e.target.value})}
                />

            <textarea className="form-control mb-2"
                      type="text"  
                      placeholder="Ingrese Descripcion" 
                      name="description" 
                      value={todo.description}
                      //onChange={e => setDescription(e.target.value)}
                     // onChange={e => setTodo({ ...todo, title: e.target.description})}
                     onChange={handleChange}

                      />

            <select className="form-select mb-2" 
                    name="state" 
                    value={todo.state}
                    onChange={handleChange}
                    // onChange={e => setTodo({ ...todo, title: e.target.state})}
                    >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
            </select>

            <div className="form-check">
                <input
                    type="checkbox"
                    name="priority"
                    className="form-check-input"
                    id="inputCheck"
                    checked={todo.priority}  // en lugar de value
                    onChange={handleChange}
                    // onChange={(e) => setTodo({...todo, priority: e.target.checked })}
                />
                <label htmlFor="inputCheck">Prioridad</label>
            </div>
            
            <button type="submit" className="btn btn-primary">Procesar</button>

           
            
        </form>
        </div>
        
    )
    
}

export default Controlado;
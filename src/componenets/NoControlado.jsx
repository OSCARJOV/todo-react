import { useRef, useState } from "react"


const NoControlado = () => {

    //const form = document.querySelector('#form') //  esto se usaba para tomar el id del form

    const [error, setError] = useState("")

    const form = useRef(null) // ahora se usa useRef para que react compare el virtual dom con el dom real

    const handleSubmit = (e) => {
        e.preventDefault() // evita que se borre el click
        setError("") 

        // capturar los datos
        const data = new FormData(form.current); // me extrae los datos del formulario
        console.log([...data.entries()]);
        
        const dataObject = Object.fromEntries([...data.entries()]);  // me pasa la data a un objeto
        //console.log(dataObject);
        
        const {description, state, title} = dataObject
        
        //validar los datos

        if(!title.trim() || !description.trim || !state.trim || !title) return setError("llene los campos")// return console.log("campo vacio"); //(!title.trim()) si esta vacio// trim quita los espacios en blanco  

        console.log(description, state, title);

        //enviar los datos

    }

                                                                  // ref="form" se usa en lugar del id            
    return (
        <form onSubmit={(e) => handleSubmit(e)} ref={form}>
            <input type="text" placeholder="Ingrese todo"
                className="form-control mb-2" name="title" />

            <textarea className="form-control mb-2"
                placeholder="Ingrese Descripcion" name="description" />

            <select className="form-select mb-2" name="state">
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" className="btn btn-primary">Procesar</button>
            {
        error !== "" && error
            }
        </form>

        
    )
    
}

export default NoControlado;
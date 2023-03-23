import { useState } from "react"

const BotonState = () => {   // por eso se crearon los hooks , no hay forma de pasarle la actulizacion del estado de cont al props.cont

    
    const [count, setCount] = useState(0)  // lo que esta en el array es la destructuracion del count y la funcion

   
    const handleClick = () => {
      //  cont = cont + 1 
      setCount(count+1) // setCout es la funcion que modifica a count 
        console.log("Click Handle"+ count);
    }
    return(
        <button cont="cont" onClick={handleClick}>Clic Boton State {count}</button>  // count se actualiza 
    )
}

export default BotonState   
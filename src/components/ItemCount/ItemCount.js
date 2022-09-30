import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const ItemListContainer = ({initial, stock, onAdd}) => {
    const [counter, setCounter] = useState(initial)

    const incrementCounter = () => {
        if (counter < stock)
        {
            setCounter(counter+1)
        }
    }

    const decrementCounter = () => {
        if (counter > 0 )
        {
            setCounter(counter-1)
        }
    }

    return (
        <div>
            <div className="alert alert-primary" role="alert">{counter}</div>
            <button onClick={incrementCounter}><FontAwesomeIcon icon={faPlusCircle} /></button>
            <button onClick={decrementCounter}><FontAwesomeIcon icon={faMinus} /></button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
  }

export default ItemListContainer;



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const ItemListContainer = ({initial, stock}) => {

    const [counter, setCounter] = useState(initial)

    const onAdd = () => {
        if (counter > 0 )
        {
            if (stock > 0 && counter <=stock)
            {
                stock = stock - counter
                alert('Items agregado al carrito:' + counter )
            }
            else
            {
                alert('No hay stock suficiente')
            }
        }
    }

    const incrementCounter = () => {
        console.log('incrementCounter', counter)
        if (counter < stock)
        {
            setCounter(counter+1)
        }
    }

    const decrementCounter = () => {
        console.log('decrementCounter', counter)
        if (counter > 0 )
        {
            setCounter(counter-1)
        }
    }

    return (
        <div>
            <button onClick={incrementCounter}><FontAwesomeIcon icon={faPlusCircle} /></button>
            <span>{counter}</span>
            <button onClick={decrementCounter}><FontAwesomeIcon icon={faMinus} /></button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    );
  }

export default ItemListContainer;



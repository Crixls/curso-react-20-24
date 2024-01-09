import React, { useState } from 'react';

const initialState=0;

const Contador = () => {

    const [counter, setCounter] = useState(initialState)

    //declaracion de funciones

    function handleIncrement(){ 
        setCounter(counter+1)
        //coger el ultimo valor de la variable estado
        setCounter((prevCounter) => prevCounter +1);
    }

    function handleDecrement(){ 
        setCounter(counter-1)
    }
    function handleValor(valor){ 
        setCounter(counter-valor)
    }



    return (
        <>
            <h1>Ejemplo de contador en React</h1>
            <h2>El contador vale {counter}</h2>
            <button onClick={handleIncrement}>Incrementar contador</button>
            <button onClick={handleDecrement}>Decrementar contador</button>
            <button onClick={()=>handleValor(5)}>Decrementar contador</button>
           
        </>
    )
}

export default Contador


/*Quiero que el decrementar sea un valor que se pase como parámetro */
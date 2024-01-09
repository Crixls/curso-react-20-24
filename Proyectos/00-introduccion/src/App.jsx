//Imports

import "./App.css" ;
import React from 'react'
import Contador from "./components/UseState/Contador";

//Declaración de variables globales

const App = () => { 
  //Hooks 

  //Declaración de variables locales

  const texto="";
  const numero=1;
  const array=["fruta","pera","manzanza","fresa","uva"];

  const objeto={
    nombre:"Cristina",
    edad:23,
  }

  //Funciones del componente
  // return (
  //   <div>
  //     <h1>Ejemplo básico JSX </h1>
  //     <h2>Variables en JSX y objetos</h2>
  //     <div>
  //       <h3>La variable texto vale {texto}</h3>
  //       <h3>La variable numero vale {numero}</h3>
  //       <h3>Me llamo {objeto.nombre} y tengo {objeto.edad}</h3>
  //       <ul>{array.map(fruta => <li key={fruta}>{fruta}</li>)}</ul>

        
  //     </div>
  //   </div>
  // )
  
  //siempre que cambie el estado de un componente se volvera a renderizar un componente
  return(
    <Contador />
  )
}

export default App


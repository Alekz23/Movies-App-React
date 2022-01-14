import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';


/* const Componente=(props)=>{
  console.log(props)

  // manera de obtener los atributos del objeto props
  //const titulo= props.titulo;
  //const contenido= props.contenido;

  //2da forma por Structs------------
  const {titulo, contenido}= props;

  return (<div>
          <h1>{titulo}</h1>
          <div>{contenido}</div>
          </div>);
} */

// destructirar el objeto de props de manera directa en los parametros
/* const Componente=({titulo, children})=>{
  return (<div>
          <h1>{titulo}</h1>
          <div>{children}</div>
          </div>);
} */


//renderizar elementos(etiquetas html)
// el contenido dentro de las etiquetas son hijos---(hola desde props)
//ReactDOM.render( <Componente titulo="New Titulo">hola desde props contenido</Componente>,
ReactDOM.render( <App/>,
 document.getElementById('root')
);



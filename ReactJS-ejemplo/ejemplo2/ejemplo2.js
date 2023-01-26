// --------- Agregar React a Web - ejemplo 2 - varios elementos  ----------

import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'  
import React from 'https://esm.sh/react@18.2.0'                //Importar React

const appDomElement = document.getElementById('app')  

const root = ReactDOM.createRoot(appDomElement)

// Para crear elementos con React se le deve pasar tres atributos ('el tipo de elemento','propiedades del elemento','contenido del elemento') 
const button = React.createElement('button',{"data-id":123},'Me Gusta')
const button2 = React.createElement('button',{"data-id":456},'Me Gusta')
const button3 = React.createElement('button',{"data-id":678},'Me Gusta')

const app = React.createElement(React.Fragment, null, [button, button2, button3])

// Dentro de la base ROOT le decimos que queremos renderisar (si no se importa React, solo se puede renderizar texto por temas de seguridad)
root.render(app)



/*
Se podria simplificar un poco el codigo haciendo:

    const h = React.createElement
    const button = h('button',{"data-id":123},'Me Gusta')
    const button2 = h('button',{"data-id":456},'Me Gusta')
    const button3 = h('button',{"data-id":678},'Me Gusta')

    const app = h(React.Fragment, null, [button, button2, button3])

*/

/*
  ---------------  SI UTILIZAMOS JSX ---------------------
//  Es lo mismo lo de arriba 'sin jsx' que lo de abajo 'con jsx'


//SIN JSX  

    const button = React.createElement('button',{"data-id":123},'Button 1')
    const button2 = React.createElement('button',{"data-id":456},'Button 2')
    const button3 = React.createElement('button',{"data-id":678},'Button 3')

    const app = React.createElement(React.Fragment, null, [button, button2, button3])

//CON JSX

    <React.Fragment>
        <button data-id="123"> Me Gusta </button>    
        <button data-id="456"> Me Gusta </button>    
        <button data-id="789"> Me Gusta </button>
    <React.Fragment>

//El ecargado hacer este tipo  trasformacion es el traspilador como BABEL o SWC

*/


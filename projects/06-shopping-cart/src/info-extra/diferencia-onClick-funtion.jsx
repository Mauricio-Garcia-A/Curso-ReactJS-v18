// Codigo generado y extraido de 'https://stackblitz.com/edit'

import * as React from 'react'
import './style.css'

const hadleClick = (event) => {
  console.log(event)
}
const fun = () => hadleClick()

/* En este caso hacen lo mismo, diferencia sutil, pero importante y es que, mientras en el primero le pasamos directamente la funcion, en el segundo creamos una funcion anonima y ejecutando el handleClick.

- onClick={hadleClick}  ------------------------------
  Se pasa directamente la funcion handleClick.
  Llega el evento 'event'

  Estamos pasandole la referencia de la funcion, pero no la ejecucion de la funcion. Por lo tanto este {handleClic} va a recibir todos los parametros del onClick, por ejemplo el 'evento'

  Cuando es mejor usarlo?
  En este caso normalmente se va a querer manejar el evento del onClick, y puede tener sentido usarlo.
  Pero en otros casos puede puede ser cosiderado una mala practica

-----------------------------------------------------

onClick={()=>hadleClick()}
   se le pasa una fincion anonima que ejecuta handleClick

onClick={fun}
  se le pasa un funcion de forma nombrada, que es lo mismo que pasaro de forma anonima.

  No llega el evento 'event'. No le llega nada 'undefined')
  pasa la ejecucion de la funcion,

  En este caso estamos creando una nueva funcion, por lo tanto el onClick esta recibiendo esta nueva funcion, y al no estar recuperando el parametro y no se lo estamos pasando, nos va a devolver 'undefined'.
  onClick={(parametroRecuparado)=>hadleClick(parametrosPasados)}

  Cuando es mejor usarlo?
  cuando creo una funcion anonima, esta funcion esta recibiendo mas parametros aunque no se vean escritos en el codigo, y el handleClick() se llame como vacio.
  Por eso no es conveniente usarlo, si no hay parametros pasados por argumento.
  Cuando se tienen parametros especificos en handleClick(parmetro1), esta es la mejor opcion.

  Y POR LO GENERA ESTA SIEMPRE ES LA MEJOR OPCION (se usa solo cuando se le pasan argumentos) ES BUENA PRACTICA USARLA.

*/

// EJEMPLO DE ESTA ULTIMA OPCION (paso involuntario de parametros por argumento)

const numbers = [1, 2, 3, 4]
// const nx2 = numbers.map((n) => n * 2);
const map = (n) => n * 2
const nx2 = numbers.map(map)

console.log(nx2)

/* La funcion map esta recibiendo mas argumentos de los que se muestran, no solamente el 'n'.

  const numbers = [1, 2, 3, 4];
  const map = (... args) => {
    const [number, index, array] = args

    console.log({number,index,array})
    console.log(args)

  return n * 2};
  }
  const nx2 = numbers.map(map);

En este caso se veria que la funcion por defectos esta recibiendo argumentos como el indice, y el arreglo.
Por el solo hecho de pasarselo asi, como una funcion anonima/nombrada, le estamos pasando todos los paramatros(por argumento) sin darnos cuentas. En temas de micro optimisacion, es peor porque
*/

export default function App () {
  return (
    <div>
      <button onClick={hadleClick}> Funcion 1 </button>
      <button onClick={() => hadleClick()}> Funcion 2 </button>
      <button onClick={fun}> idem-Funcion 2 </button>
    </div>
  )
}

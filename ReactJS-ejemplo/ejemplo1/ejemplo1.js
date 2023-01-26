// --------- Agregar React a Web - ejemplo 1 - solo texto  ----------

//Importar ReactDOM
import ReactDOM from 'https://esm.sh/react-dom@18.2.0/client'


//Recuperamos el elemento con id 'app' del DOM
const appDomElement = document.getElementById('app')

// Creamos un arbol de componentes, estableciondo como base el elemnto con id 'app'
const root = ReactDOM.createRoot(appDomElement)
// Dentro de la base ROOT le decimos que queremos renderisar
root.render('Hola ReactJS')

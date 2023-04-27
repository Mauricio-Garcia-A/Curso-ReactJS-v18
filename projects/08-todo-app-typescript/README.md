## Crear un TodoMVC con TypeScript

 Inicializar proyecto con Vite
 Añadir linter para TypeScript + React
 Añadir estilos del TodoMVC
 Listar todos los TODOs
 Poder borrar un TODO
 Marcar TODO como completado
 Añadir forma de filtrar TODOs (Footer)
 Mostrar número de TODOs pendientes (Footer)
 Añadir forma de borrar todos los TODOs completados
 Crear Header con input (Header)
 Crear un TODO (Header)
 Poder editar el texto de un TODO (Doble click)
 Añadir animaciones con AutoAnimate
 Pasar a Reducer
 Sincronizar con el backend

---------------------------------------------------------------------------
## Inicializar proyecto
$ npm create vite@latest TypeScript + SWC

## Añadir linter para TypeScript + React
$ npx eslint --init
You can also run this command directly using 'npm init @eslint/config'.
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · standard-with-typescript
✔ What format do you want your config file to be in? · JS

## Añadir estilos del TodoMVC
npm install todomvc-app-css -E


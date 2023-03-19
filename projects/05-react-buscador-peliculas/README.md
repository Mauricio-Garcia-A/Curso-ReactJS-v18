- PRYECTO INICIALIZADO CON 'PNPM'
- WATER CSS (Modicacion index.css)
- JASON FORMTTER extension chrome
- useRef 
    hook permite crear una referecia mutable que persiste durante todo el ciclo de vida del componente. y que es muy util para guardar cualquier valor que pueda mutar, como un identificador, elemento del DOM, un contador, que al cambiar NO vuelve a renderizar el componente, 'a diferencia del useState'
    + Se utiliza para guardar referias de un elemento del DOM
    + Crear valor que persiste entre renderizados(valor no se reinicia en el renderizado)
- useMemo
- useCallback

- DEBAUNCE (ludash debaunce, use-debaunce, ..., exsten muchos mas hechos con JS y para React)
    Las funciones de (debounce) no se ejecutan al momento de su invocación. En lugar de eso, su ejecución es retrasada por un periodo predeterminado de tiempo. Si la misma función es invocada de nuevo, la ejecución previa es cancelada y el tiempo de espera se reinicia.
    + Utilizaremso el DEBAUNCE de la libreria 'JUST Angus-c'. (pnpm install just-debaunce-it -E) para resolver el tema de esperar que se termine de teclear el nombre de la pelicula para realizar la busqueda.
    como utilizarla (https://github.com/angus-c/just/tree/master/packages/function-debounce)

------------------------------------------------------------------
Crea una aplicación para buscar películas

API a usar:

https://www.omdbapi.com/
API_KEY: ebffc562

// https://www.omdbapi.com/?apikey=ebffc562&s=Avengers


Requerimientos:

- Necesita mostrar un input para buscar la película y un botón para buscar. 
- Lista las películas y muestra el título, año y poster. 
- Que el formulario funcione 
- Haz que las películas se muestren en un grid responsive. 
- Hacer el fetching de datos a la API


Primera iteración:

- Evitar que se haga la misma búsqueda dos veces seguidas.
- Haz que la búsqueda se haga automáticamente al escribir.
- Evita que se haga la búsqueda continuamente al escribir (debounce)
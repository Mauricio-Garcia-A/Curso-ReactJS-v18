-  con npm
- inicializado con pnpm
- instalamos y configuramos el Linter (npx eslint --init)
- configuramos reglas del eslint

- Para tipar la respuesta utilizamos alguna herramienta online (buscar en google: generate ts interface from json) ejemplo: https://quicktype.io/typescript

- .localeCompare (metodo para comparar strings) localeCompare, compara strings tomando encuenta acentos y otros simbolos especiales
- toSorted (nuevo metodo JS, que sirve para ordenar igual que sort pero crea una copia sin mutar el original )

- Como key o Id unico del usuario podemos usar el "user.email" o "user.login.uuid"
- EVITAR MANEJAR 2 o MAS ESTADOS con los mismos datos (ejemplo users y originalUsers). 
    "const [originalUsers, setOriginalUsers] = useState([])"      // Esta seria una manera de hacerlo manejando 2 estados, pero no es la correcta, porque no es optima.
    Tambien otra solucion seria guargarlo en una variable "let originalUsers=res.results", tambien funcionaria pero si el componente se llama una sola vez, y en un solo lugar. De otra forma, se combinarian los arrays, ya que se compartirian los valores de esa variable, y se tendrian cosas inesperadas.
    La solucion correcta es usar el hook 'useRef'
    useRef --> usamos el useRef para guardar el valor, que queremos que se comparta entre renderizados, pero al cambiar no vuelva a rendereizar el componente (en conclucion el useRef lo que nos permite es guardar valores que queremos que se preserven/conserven entre renderizados)
- Para evitar que se ordenen los usuarios cada ves que cambia un estado en la app, utilizamos el useMemo. 

Prueba técnica con TypeScript y React -----------------

El objetivo de esta prueba técnica es crear una aplicación similar a la que se proporciona en este enlace: https://midu-react-11.surge.sh/. 
Para lograr esto, debe usar la API proporcionada por https://randomuser.me/.
Estos son los pasos a seguir:
    - Obtener 100 filas de datos mediante la API.
    -  Mostrar los datos en formato de tabla, similar al ejemplo.
    - Proporcione la opción de colorear filas como se muestra en el ejemplo. 
    - Permitir que los datos se ordenen por país, como se muestra en el ejemplo.
    -  Habilite la capacidad de eliminar una fila, como se muestra en el ejemplo.
    - Implementar una función que permita al usuario restaurar el estado inicial, lo que significa que se recuperarán todas las filas eliminadas.
    - Manejar cualquier error potencial que pueda ocurrir.
    -  Implementar una función que permita al usuario filtrar los datos por país.
    - Evita ordenar de nuevo los datos de los usuarios cuando el usuario está cambiando el filtro por país.
    - Ordenar haciendo clic en el encabezado de la columna.
    

------------

The objective of this technical test is to create a similar application to the one provided in this link: https://midu-react-11.surge.sh/.
To achieve this, you must use the API provided by https://randomuser.me/.
Here are the steps to follow:
    - Fetch 100 rows of data using the API.
    - Display the data in a table format, similar to the example.
    - Provide the option to color rows as shown in the example. - [x] Allow the data to be sorted by country as demonstrated in the example.
    - Enable the ability to delete a row as shown in the example.
    - Implement a feature that allows the user to restore the initial state, meaning that all deleted rows will be recovered.
    - Handle any potential errors that may occur.
    - Implement a feature that allows the user to filter the data by country.
    - Avoid sorting users again the data when the user is changing filter by country.
    - Sort by clicking on the column header.

# Crea un React Router desde cero

 Crear una forma de hacer MPAs (Multiple Page Application)
 Crea una forma de hacer SPAs (Single Page Applications)
 Poder navegar entre páginas con el botón de atrás
 Crear componente Link para hacerlo declarativo
 Crear componente Router para hacerlo más declarativo
 Soportar ruta por defecto (404)
 Soportar rutas con parámetros
 Componente para hacerlo declarativo
 Lazy Loading de las rutas
 Hacer un i18n con las rutas (internacionalización ES/EN)
 Testing
 Publicar el paquete en NPM

 ------------------------------------------------------------------

- Aplicamos estilos predeterminados (simplecss.org)
    copiamos <link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css"> en el index.html
- analizar  window.history.pushState
- Mala practica es usar un boton para hacer navegaciones. para ello se usa la etiqueta ancor (<a>"anchor"<a/>) ya que esta tiene propiedades propias como abrir en una nueva ventana, copiar direccion del enlacese,... y evita otros problemas de accecivilidad que tienen los buttons.
- Para hacer las rutas con parametros, descargara una dependencia que utilisa REGEX (dependecia que te permite utilisar los paths, en donde la parte con ':' es parte dinamica )
    pnpm install path-to-regexp -E
    Esta libreria solo simplifica como accedemos a la informacion dinamica del path
- Optional chaining (?.)
    const Page = (condicion: null / resultado )?.Component <-- Si la condicion devuelve null, no sigue evaluando lo de la derecha, si devuelve un resultado, continua con lo de la derecha. En este casi si ecuentra un resultado, detro de dicho resultado busca su atributo 'Component'
    EVITA COMPLEJIDAD DE CODIGO (evita escrivir mucho codigo para acceder al componente, sin que de error)
- Lazy Loading (carga dinamicamente los coponentes a medida que se van utilizando)
    Se le deve indicar a React, envolviendo con la etiqueta <Suspense> ... (compnente no cargado aun) ... </Suspense>

- Tests (intalacion de vitest)
    pnpm install vitest -D
    "test": "vitest"  <-- Se agrega esa linea en el package.json

    Para poder testiar componentes de react es necesario renderizarlo, para ello instalamos las herramientas como:
        - happy-dom (para simular el arbol de elementos, como si fuera un navegador )
        - @testing-library/react (biblioteca de utilidades )

        pnpm install happy-dom @testing-library/react -D

        en vite.config.js configuramos el entorno donde se ejecutaran los test, con la sigiente linea:
            test: {
                environment: 'happy-dom'
            }
        istalo extecion VSC (vitest)
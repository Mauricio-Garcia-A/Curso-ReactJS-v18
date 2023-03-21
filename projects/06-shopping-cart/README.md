
- Prop Drilling
  las prop pasan de componente a componente como si fueran capas. El prop drilling no es de por sí algo malo o que haya que evitar a toda costa. De hecho, es parte integral del funcionamiento de React.
- useId (Gerera un identificador unico para el elemento dentro de la aplicacion)
  + Funciona con Server-side Rendering. (renderizado del lado del servidor) Ideal para cuando se trabaja con Next JS
  + Se le asigna el ID al elemento por el orden de llamada dentro del componente. (ideal para id de imput, NO UTILIZAR CON MAP)
- useContext ( El contexto nos permite compartir variable, estados y diferentes cosas, entre componentes que pertenescan al mismo contexto. Copartir cosas de forma global)
  + Contexto es una forma de inyeccion de dependecias (esto quiere decir que se puede inyectar informacion saltandote las props del componentes). Pueden ser estatica o dinamicas. Se pueden guardar tokens, colores de plantilla, inyectar configuracion, o hacer un estado globales(dinamica).
  + Sirve para evitar ProrDrilling
  + El contexto es algo que esta separado de nuestro arbol de componentes y que se puede leer de forma separada por los diferentes componentes independientemente (Desacopla logica del negocio)
  + useContext, para estados globales esta pesado solo para estados muy pequeños, o que cambien con poca frecuencias (login de seccion, )
  Para el control de estados mas complejos y quirugicos, se puede utilizar REDUX (una de las peores opciones hoy en dia), ZUSTAND, entre otras.
- utilizar el prevState dentro del setState, previene errores. (res condition)
- NO USAR el 'bind'- No es buena practica (en el onClick es preferible usar un funcion envolviendo la ejecucion de otra 'onClic={()=>funcion(variable)}', a usar un bind 'onClic={funcion.bind(this, variable)}') El bind se usaba cuando y eran util en componentes de clases.
- useRedux. 
  + es interesante utilizar useReducer cuando tengo muchos useState juntos
- localStorage
-----------------------------------------------------------
Pueba tecnica: Ecommerce
  - Muestra una lista de productos que vienen de un JSON
  - Añade un filtro por categoría
  - Añade un filtro por precio
  - Haz uso de useContext para evitar pasar props innecesarias.

Carrito de Supermercado:
  - Haz que se puedan añadir los productos a un carrito.
  - Haz que se puedan eliminar los productos del carrito.
  - Haz que se puedan modificar la cantidad de productos del carrito.
  - Sincroniza los cambios del carrito con la lista de productos.
  - Guarda en un localStorage el carrito para que se recupere al recargar la página. (da puntos)
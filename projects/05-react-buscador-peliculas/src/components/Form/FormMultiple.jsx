
// Forma tradicional de hacer un Formulario (Forma nativa de hacer peticiones) REMIX utiliza este metodo (POST y GET). Forma nativa HTML
// FORMA NATIVA (HTML) - Gestionar Formularo solo con HTML

export default function FormMultiple () {
  return (
    <div>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }} action='/server' method='get'>
        <div className='from-group'>
          <label for='name'>Nombre</label>
          <input id='name' name='name' type='text' placeholder='Ingrese su nombre completo' required />
        </div>
        <div className='from-group'>
          <label for='email'>Email</label>
          <input id='email' type='email' name='email' placeholder='Ingrese su correo electronico' required />
        </div>
        <div className='from-group'>
          <fieldset>
            <legend>Tipos de Opciones RADIO</legend>
            <div>
              <input type='radio' id='option1-radio' name='type-radio' value='option1' />
              <label for='option1-radio'>Opcion 1</label>
            </div>
            <div>
              <input type='radio' id='option2-radio' name='type-radio' value='option2' />
              <label for='option2-radio'>Opcion 2</label>
            </div>
            <div>
              <input type='radio' id='option3-radio' name='type-radio' value='option3' />
              <label for='option3-radio'>Opcion 3</label>
            </div>
            <div>
              <input type='radio' id='option4-radio' name='type-radio' value='option4' />
              <label for='option4-radio'>Opcion 4</label>
            </div>
          </fieldset>
        </div>
        <div className='from-group'>
          <label for='type-select'>Tipos de Opciones SELECT</label>
          <select id='type-select' name='type-select' required>
            <option disabled selected value=''> -Seleccione una opcion-</option>
            <option value='opcio1'>Opcion 1</option>
            <option value='opcio2'>Opcion 2</option>
            <option value='opcio3'>Opcion 3</option>
            <option value='opcio4'>Opcion 4</option>
          </select>
        </div>
        <div className='from-group'>
          <label for='description'>Ingrese texto</label>
          <textarea id='description' name='description' required />
          <span>Escribe una descripcion en al menos 200 palabras</span>
        </div>
        <div className='from-group'>
          <label for='term'>
            <input id='term' name='term' type='checkbox' required value='on' />
            <span>Acepto Terminos y condiciones</span>
          </label>
        </div>
        <button>Enviar</button>
      </form>
    </div>
  )
}

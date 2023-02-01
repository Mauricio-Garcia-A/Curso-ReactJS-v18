import { useEffect, useState } from "react"
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT_URL = `https://catfact.ninja/fact?max_length=100`
const CAT_PREFIX_IMAGE_URL = `https://cataas.com`


export function App() {

    const [fact, setFact] = useState()
    const [imageURL, setImageURL] = useState()
    const [factError, setFactError] = useState('No hay error')

    //  Recuperar la cita 0 frase al cargar la pagina
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
            .then(res => {
                // Manejo de errores en la RESPUESTA (si el 'Status Code' no es correcto)
                // if (!res.ok) throw new Error('Error feching fact')    <--- Una forma de hacerlo
                if (!res.ok) {  //  (TODO: handle error if !res.ok) - continuar con los errores mas adelante
                    setFactError('No se a podido recuperar la cita - Problemas en la Respuesta')    //  <------ hacerlo con manejo de estados
                }
                return res.json()
            })
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
            .catch((err) => { //El catch en el fetch entra solamente cuando a habido un problema con la peticion, y no con la respuesta
                //Manejo de errores con la PETICION
                //Acer un analisis mas exautivo de los errores con alguna libreria como "Axion"
                setFactError('No se a podido recuperar la cita - Problema en la Peticion')
            }

            )
    }, [])

    //  Recuperar la imagen cada ves que engamos una nueva cita/frase
    useEffect(() => {
        if (!fact) return   //Si no hay fast, devulvo nada, sino continuo

        const threeFirstWord = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageURL(url)
            }
            )
    }, [fact])

    return (
        <main className="conteiner-app">
            <h1> APP DE GATITOS</h1>
            {fact && <p>{fact}</p>}
            {imageURL
                ? <img src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`} alt='image-cat-three-word' />
                : <p>CARGANDO IMAGEN DE GATITO...</p>
            }
        </main>
    )
}
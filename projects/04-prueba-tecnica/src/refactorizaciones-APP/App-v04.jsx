import { useEffect, useState } from "react"
import './App.css'
import { useCatImage } from "./hooks/useCatImage.js"
import { getRandomFact } from "./services/getFact.js"

const CAT_PREFIX_IMAGE_URL = `https://cataas.com`

export function AppV04() {
    const [fact, setFact] = useState()

    useEffect(() => {
        //getRandomFact().then(newFact => setFact(newFact))         
        getRandomFact().then(setFact)           // Es lo mismo que el codigo de arriba, la funcion setFact recibe el valor then (ESTO ES MALA PARACTICA)
    }, [])

    const { imageURL } = useCatImage({ fact })

    const handleClick = async () => {
        const newFact = await getRandomFact()
        setFact(newFact)
    }

    return (
        <main className="conteiner-app">
            <h1> APP DE GATITOS</h1>
            <button onClick={handleClick}>Generar nueva frase</button>
            {fact && <p>{fact}</p>}
            {imageURL
                ? <img src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`} alt='image-cat-three-word' />
                : <p>CARGANDO IMAGEN DE GATITO...</p>
            }
        </main>
    )
}
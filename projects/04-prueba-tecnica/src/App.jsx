import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from "./hooks/useCatImage.js"

export function App() {
    const { fact, refreshFact } = useCatFact()
    const { imageURL } = useCatImage({ fact })

    const handleClick = () => {
        refreshFact()
    }

    return (
        <main className="conteiner-app">
            <h1> APP DE GATITOS</h1>
            <button onClick={handleClick}>Generar nueva frase</button>
            {fact && <p>{fact}</p>}
            {imageURL
                ? <img src={imageURL} alt='image-cat-three-word' />
                : <p>CARGANDO IMAGEN DE GATITO...</p>
            }
        </main>
    )
}
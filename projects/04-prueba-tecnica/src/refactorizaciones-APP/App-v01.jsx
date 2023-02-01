import { useEffect, useState } from "react"
import './App.css'
//const firstWord2 = 'hello'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord2}?size=50&color=red&json=true`
const CAT_ENDPOINT_RANDOM_FACT_URL = `https://catfact.ninja/fact?max_length=100`
const CAT_PREFIX_IMAGE_URL = `https://cataas.com`


export function AppV01() {

    const [fact, setFact] = useState()
    const [imageURL, setImageURL] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
                //const threeFirstWord = fact.split(' ').slice(0, 3).join(' ')
                const threeFirstWord = fact.split(' ', 3).join(' ')

                fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
                    .then(res => res.json())
                    .then(response => {
                        const { url } = response
                        setImageURL(url)
                    }
                    )
            })
    }, [])


    return (
        <main className="conteiner-app">
            <h1> APP DE GATITOS</h1>
            {   // Renderizado Condicional
                fact && <>
                    <p>{fact}</p>
                </>
            }
            {imageURL
                ? <>
                    <img src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`} alt='image-cat-three-word' />
                </>
                : <p>CARGANDO IMAGEN DE GATITO...</p>
            }
        </main>
    )
}


/*
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
            .then(res => res.json())
            .then(data => setFact(data.fact))
    }, [])

*/

const CAT_ENDPOINT_RANDOM_FACT_URL = `https://catfact.ninja/fact?max_length=100`



export const getRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDOM_FACT_URL)
        .then(res => {
            if (!res.ok) {
                console.log('No se a podido recuperar la cita - Problemas en la Respuesta')
            }
            return res.json()
        })
        .then(data => {
            const { fact } = data
            return fact
        })
        .catch((err) => {
            console.log('No se a podido recuperar la cita - Problema en la Peticion')
        })
}
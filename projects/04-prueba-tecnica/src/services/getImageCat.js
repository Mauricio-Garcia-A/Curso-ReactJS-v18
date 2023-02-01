
export default function getImageCat(threeFirstWord) {
    return fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const { url } = response
            return url
        })
}

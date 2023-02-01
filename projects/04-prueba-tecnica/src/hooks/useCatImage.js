import { useEffect, useState } from "react"
import getImageCat from "../services/getImageCat"

const CAT_PREFIX_IMAGE_URL = `https://cataas.com`

export function useCatImage({ fact }) {
    const [imageURL, setImageURL] = useState()

    useEffect(() => {
        if (!fact) return
        const threeFirstWord = fact.split(' ', 3).join(' ')
        getImageCat(threeFirstWord).then(setImageURL)
    }, [fact])

    return { imageURL: `${CAT_PREFIX_IMAGE_URL}${imageURL}` }
}
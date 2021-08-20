
import { useState, useEffect } from "react"

const useRefOnRender = (refs = []) => {
    const [elements, setElements] = useState([])
    
    useEffect(() => {
        setElements(refs.map(el => el.current))
    }, [])

    return elements
}

export {useRefOnRender}
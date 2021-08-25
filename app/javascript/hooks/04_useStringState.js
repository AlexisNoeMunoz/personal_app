
import { useState } from "react"

const useStringState = (initialValue = '') => {
    const [value, set] = useState(initialValue)
    return [ value, set ]
}

export { useStringState }
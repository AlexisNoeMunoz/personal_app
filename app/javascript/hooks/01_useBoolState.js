
import { useState } from 'react'

const useBoolState = (initialValue) => {
    const [state, setState] = useState(initialValue)
    const toggle = () => setState(!state)
    return [ state, toggle ]
}

export { useBoolState }

import { useState } from 'react'

const useBoolState = (initialValue) => {
    const [state, setState] = useState(initialValue)
    const toggleState = () => setState(!state)
    return [state, toggleState]
}

export default useBoolState
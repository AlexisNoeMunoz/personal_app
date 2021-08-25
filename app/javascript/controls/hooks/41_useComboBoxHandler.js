
import { useRef, useState, useImperativeHandle, useEffect } from "react"

const useComboBoxHandler = (ref, value) => {
    const $input = useRef()
    const [status, setStatus] = useState('')

    useEffect(() => {
        if (status == 'REQUIRED' && value)
            setStatus('')
    }, [value])

    useImperativeHandle(ref, () => ({
        validate: () => {
            const valid = $input.current.validity.valid
            if (!valid) setStatus('REQUIRED')
            else setStatus('')
            return valid            
        },
    }))

    return { $input, status }
}

export { useComboBoxHandler }

import { useRef, useState, useImperativeHandle, useEffect } from "react"

const useFieldHandler = (ref, value) => {
    const $input = useRef()
    const [status, setStatus] = useState('')
    const [customError, setCustomError] = useState('')

    useEffect(() => {                
        if(status == 'REQUIRED' && value !== '')
            setStatus('')
    }, [value])  

    useImperativeHandle(ref, () => ({ 
        validate: () => {
            const valid = $input.current.validity.valid
            if(value == '' && !valid) setStatus('REQUIRED')
            else if(!valid) setStatus('INVALID')
            else { setStatus(''); return true}
            return false
        }, 
        sendCustomError: (newCustomError) => {        
            setCustomError(newCustomError)
            setStatus('INVALID_CUSTOM_ERROR')
        },
    }))

    return {$input, status, customError}
}

export {useFieldHandler}
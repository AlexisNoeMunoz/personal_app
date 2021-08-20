
import { createContext, useRef, useContext } from 'react'
import { ErrorMessage } from 'controls'

const ErrorMessageContext = createContext()

const ErrorMessageProvider = ({ children }) => {
    const $errorMessage = useRef()
    
    return (
        <ErrorMessageContext.Provider value={$errorMessage}>
            <ErrorMessage ref={$errorMessage} />
            {children}
        </ErrorMessageContext.Provider>
    )
}

const useErrorMessage = () => {
    const $errorMessage = useContext(ErrorMessageContext)
    return { $errorMessage }
}

export { ErrorMessageProvider, useErrorMessage }
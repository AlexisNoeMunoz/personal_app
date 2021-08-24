
import { useEffect } from 'react'

const useClickOutsideHandler = ({ onClick, array = [], $element = window, ref = false}) => {        
    const $finalElement = ref ? $element : {current: $element}

    const onClickHandler = (event) => {        
        if(!$finalElement.current.contains(event.target)) onClick(event)
    }
    
    useEffect(() => {        
        $finalElement.current.addEventListener('click', onClickHandler)
        return () => {
            $finalElement.current.removeEventListener('click', onClickHandler)
        }        
    }, array)
}

export { useClickOutsideHandler }
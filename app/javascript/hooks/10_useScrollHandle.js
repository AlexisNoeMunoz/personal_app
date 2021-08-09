
import {useEffect} from 'react'

const useScrollHandle = ({onScroll, array = [], element = window}) => {
    useEffect(() => {        
        element.addEventListener('scroll', onScroll)
        return () => {
            element.removeEventListener('scroll', onScroll)
        }
    }, array)    
}

export default useScrollHandle
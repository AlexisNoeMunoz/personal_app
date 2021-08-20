
import {useEffect} from 'react'

const useScrollHandler = ({onScroll, array = [], element = window}) => {
    useEffect(() => {        
        element.addEventListener('scroll', onScroll)
        return () => {
            element.removeEventListener('scroll', onScroll)
        }
    }, array)    
}

export {useScrollHandler}
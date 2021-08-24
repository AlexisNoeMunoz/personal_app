
import {createPortal} from 'react-dom'

const Portal = ({children, container = document.body,}) => 
        createPortal(children, container)       

export {Portal}

import { useState, useEffect } from 'react'
import { Scroll, Grid, ButtonClean, Icon, Portal} from 'controls'

const Modal = ({
    children,
    className = '',
    show = false,
    setShow = () => {},
    ...props}) => {
    
    const [visible, setVisible] = useState(show)        
         
    useEffect(() => {
        if(show) setVisible(true)        
        else setTimeout(() => setVisible(false) , 500)
    }, [show])

    className += " MODAL"   
    if(!show) className += ' MODAL--HIDE'

    if(!visible) return null
    return (
        <Portal>
            <Grid {...{className}} >
                <Scroll w100 className='MODAL__SCROLL'>
                    <Grid {...props}>                    
                        {children}                                     
                    </Grid>
                </Scroll>
                <ButtonClean type='danger' onClick={setShow} pad='1em' className='MODAL__CLOSE__BUTTON'>
                    <Icon icon='close' className='MODAL__CLOSE__BUTTON__ICON'/>
                </ButtonClean>
            </Grid>
        </Portal>
    )
}

import {bool, func, string} from 'prop-types'
Modal.propTypes = {
    className: string,
    show: bool,
    setShow: func,
}

export default Modal
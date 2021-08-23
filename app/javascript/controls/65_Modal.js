
import { useEffect, useRef } from 'react'
import { Scroll, Grid, ButtonClean, Icon, Portal} from 'controls'

const Modal = ({
    children,
    className = '',
    show = false,
    setShow = () => {},
    ...props}) => {
        
    const $scroll = useRef()     
   
    useEffect(() => {
        if(show) $scroll.current.focus()
    }, [show])

    className += " MODAL"       

    if(!show) return null
    return (
        <Portal>
            <Grid {...{className}} >
                <Grid className='MODAL__CONTAINER'>
                    <Scroll className='MODAL__SCROLL' ref={$scroll}>
                        <Grid {...props}>                    
                            {children}                                     
                        </Grid>
                    </Scroll>
                    <ButtonClean type='danger' onClick={setShow} pad='1em' className='MODAL__CLOSE__BUTTON'>
                        <Icon icon='close' className='MODAL__CLOSE__BUTTON__ICON'/>
                    </ButtonClean>  
                </Grid>                
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

export {Modal}
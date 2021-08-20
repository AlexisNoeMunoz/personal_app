
import { forwardRef } from 'react'

const Flex = forwardRef(({
    children,
    style = {},
    className = '',
    direction = '',
    alignX = '',
    alignY = '',
    w100 = false,
    maxWidth = '',
    wrap = false,
    gap = '',
    ...props }, ref) => {

    className += ' FLEX'
    if(w100) style['width'] = '100%'
    style['maxWidth'] = maxWidth
    
    style['flexDirection'] = direction    
    if(wrap) style['flexWrap'] = 'wrap'
    style['gap'] = gap
    
    if(direction == 'column'){
        style['justifyContent'] = alignY
        style['alignItems'] = alignX
    }else{
        style['justifyContent'] = alignX
        style['alignItems'] = alignY
    }
    return (
        <div {...props} {...{ className, style, ref}}>
            {children}
        </div>
    )
})

import { string, object, bool } from 'prop-types'
Flex.propTypes = {
    style: object,
    className: string,
    direction: string,
    alignX: string,
    alignY: string,
    w100: bool,    
    maxWidth: string,
    wrap: bool,
    gap: string,
}

Flex.displayName = 'Flex'
export {Flex}
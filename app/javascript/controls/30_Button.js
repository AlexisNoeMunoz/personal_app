import { string } from 'prop-types'
import {useWidthPropTypes, useWidthStyle, useButtonHandler, useButtonPropTypes} from 'controls/hooks'
import { forwardRef } from 'react'

const Button = forwardRef(({children, className = '',...preProps }, ref) => {        
    const {props: preProps1, style} = useWidthStyle(preProps)
    const {Element, styleClassName, props} = useButtonHandler(preProps1)

    className += ' BUTTON' + styleClassName
    return (
        <Element {...props} {...{ className, style}} ref={ref}>
            {children}
        </Element>
    )
})

Button.propTypes = {    
    className: string,
    ...useButtonPropTypes(),
    ...useWidthPropTypes(),
}

Button.displayName = 'Button'
export {Button}
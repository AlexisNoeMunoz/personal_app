
import { string } from 'prop-types'
import { forwardRef } from 'react'
import { useGridStyle, useGridPropTypes } from 'controls/hooks'

const renderDiv = forwardRef(({children, ...props}, ref) => 
        <div {...props} ref={ref}>{children}</div>)
        
const renderForm = forwardRef(({children, ...props}, ref) => 
        <form {...props} ref={ref}>{children}</form>)

const Grid = forwardRef(({    
    children,
    className = '',    
    tag = '',
    ...preProps }, ref) => {    
    
    const {props, style} = useGridStyle(preProps)
    const renderElements = {
        form: renderForm,
        div: renderDiv,
    }
    const Element = renderElements[tag] || renderDiv

    className += ' GRID'
    return (
        <Element {...props} {...{ className, style, ref }}>
            {children}
        </Element>
    )
})

Grid.propTypes = {
    className: string,    
    tag: string,
    ...useGridPropTypes()
}

Grid.displayName = 'Grid'
renderDiv.displayName = 'renderDiv'
renderForm.displayName = 'renderForm'
export {Grid} 
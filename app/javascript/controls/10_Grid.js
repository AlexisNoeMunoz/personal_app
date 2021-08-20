
import { string } from 'prop-types'
import { forwardRef } from 'react'
import { useGridStyle, useGridPropTypes } from 'controls/hooks'

const Grid = forwardRef(({    
    children,
    className = '',
    ...preProps }, ref) => {

    className += ' GRID'

    const {props, style} = useGridStyle(preProps)

    return (
        <div {...props} {...{ className, style, ref }}>
            {children}
        </div>
    )
})

Grid.propTypes = {
    className: string,    
    ...useGridPropTypes()
}

Grid.displayName = 'Grid'
export {Grid} 
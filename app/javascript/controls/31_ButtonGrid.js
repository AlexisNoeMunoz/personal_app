
import { useGridStyle, useGridPropTypes } from 'controls/hooks'

const ButtonGrid = ({
    children,
    className = '',
    type = '',
    ...preProps }) => {

    className += ' BUTTON_GRID'
    if(type !== '') className += ` BUTTON--STYLE--${type}`

    const {props, style} = useGridStyle(preProps)

    return (
        <button {...props} {...{ className, style}} >
            {children}
        </button>
    )
}

import { string } from 'prop-types'
ButtonGrid.propTypes = {
    className: string,
    type: string, 
    ...useGridPropTypes(),
}

export default ButtonGrid
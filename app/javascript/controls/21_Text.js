
import { useWidthPropTypes, useWidthStyle } from './hooks'

const Text = ({
    children,    
    className = '',
    light = false,
    neutral = false,    
    ...preProps }) => {

    className += " TEXT"
    if (light) className += ' TEXT--LIGHT'
    else if (neutral) className += ' TEXT--NEUTRAL'

    const {style, props} = useWidthStyle(preProps)

    return (
        <p {...props} {...{ className, style }}>
            {children}
        </p>
    )
}

import { string, object, bool } from 'prop-types'
Text.propTypes = {    
    className: string,
    light: bool,
    neutral: bool,
    ...useWidthPropTypes(),    
}

export { Text }
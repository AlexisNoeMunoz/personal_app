
import { useWidthStyle, useWidthPropTypes } from './hooks'
import { object, string } from "prop-types"

const List = ({
    children,
    className = '',
    indent = '',    
    ...preProps }) => {

    className += ' LIST'
    let {props, style} = useWidthStyle(preProps)
    style['paddingLeft'] = indent

    return (
        <ul {...props} {...{ className, style }}>
            {children}
        </ul>
    )
}

List.propTypes = {
    className: string,
    indent: string,
    style: object,
    ...useWidthPropTypes(),
}

export {List}
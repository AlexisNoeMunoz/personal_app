
import { string } from 'prop-types'
import { useGridStyle, useGridPropTypes, useButtonPropTypes, useButtonHandler } from 'controls/hooks'

const ButtonGrid = ({
    children,
    className = '',
    ...preProps }) => {

    const { props: preProps1, style } = useGridStyle(preProps)
    const { Element, styleClassName, props } = useButtonHandler(preProps1)

    className += ' BUTTON_GRID' + styleClassName
    return (
        <Element {...props} {...{ className, style }} >
            {children}
        </Element>
    )
}

ButtonGrid.propTypes = {
    className: string,
    ...useButtonPropTypes(),
    ...useGridPropTypes(),
}

export { ButtonGrid }

import { forwardRef } from 'react'

const renderButton = forwardRef(({ children, ...props }, ref) =>
    <button {...props} ref={ref}>{children}</button>)

const renderLink = forwardRef(({ children, ...props }, ref) =>
    <a {...props} ref={ref}>{children}</a>)

const useButtonHandler = ({ anchor = false, type = '', submit = false, ...props }) => {
    const Element = anchor ? renderLink : renderButton
    const styleClassName = type === '' ? '' : ` BUTTON--STYLE--${type}`
    if (submit) props.type = 'submit'
    return { Element, styleClassName, props }
}

renderButton.displayName = 'renderButton'
renderLink.displayName = 'rednerLink'
export { useButtonHandler }
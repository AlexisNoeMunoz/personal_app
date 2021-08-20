
const RenderButton = ({children, ...props}) => <button {...props}>{children}</button>
const RenderLink = ({children, ...props}) => <a {...props}>{children}</a>

const useButtonHandler = ({anchor = false, type = '', ...props}) => {    
    const Element = anchor ? RenderLink : RenderButton
    const styleClassName = type === '' ? '' : ` BUTTON--STYLE--${type}`
    return {Element, styleClassName, props}
}

export { useButtonHandler }
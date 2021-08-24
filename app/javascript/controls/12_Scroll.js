
import { bool, object, string } from "prop-types"
import { forwardRef } from "react"

const Scroll = forwardRef(({
    children,
    style = {},
    className = '',
    w100 = false,
    pad = '',
    ...props }, ref) => {

    className += ' SCROLL'

    if(w100) style['width'] = '100%'
    style['padding'] = pad
    return (
        <div tabIndex={0} {...props} {...{ className, style, ref }}>
            {children}
        </div>
    )
})

Scroll.propTypes = {
    style: object,
    className: string,
    w100: bool,
    pad: string,
}

Scroll.displayName = 'Scroll'
export {Scroll}
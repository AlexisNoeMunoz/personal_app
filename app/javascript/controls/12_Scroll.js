
import { bool, object, string } from "prop-types"

const Scroll = ({
    children,
    style = {},
    className = '',
    w100 = false,
    pad = '',
    ...props }) => {

    className += ' SCROLL'

    if(w100) style['width'] = '100%'
    style['padding'] = pad
    return (
        <div {...props} {...{ className, style }}>
            {children}
        </div>
    )
}

Scroll.propTypes = {
    style: object,
    className: string,
    w100: bool,
    pad: string,
}

export default Scroll
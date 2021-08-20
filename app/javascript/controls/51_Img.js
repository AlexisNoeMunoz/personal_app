import { bool, object, string } from "prop-types"

const Img = ({
    src = '',
    className = '',
    style = {},
    radius = false,
    shadow = false,
    maxWidth = '',    
    ...props }) => {

    className += ' IMG'
    if (radius) className += ' IMG--RADIUS'
    if (shadow) className += ' IMG--SHADOW'

    style['maxWidth'] = maxWidth
    return (
        <img loading='lazy' {...props} {...{ src, className, style }} />
    )
}

Img.propTypes = {
    src: string.isRequired,
    className: string,
    style: object,
    radius: bool,
    shadow: bool,
    maxWidth: string,
}

export {Img}
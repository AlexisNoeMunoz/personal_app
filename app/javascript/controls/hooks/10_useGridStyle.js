
const useGridStyle = ({
    style = {},
    alignX = '',
    alignY = '',
    alignContentX = '',
    alignContentY = '',
    gap = '',
    w100 = false,
    pad = '',
    direction = '',
    maxWidth = '',
    ...props }) => {
    
    style['gridGap'] = gap
    style['justifyItems'] = alignX
    style['alignItems'] = alignY
    style['justifyContent'] = alignContentX
    style['alignContent'] = alignContentY
    style['padding'] = pad
    style['gridAutoFlow'] = direction    
    if(w100) style['width'] = '100%'
    style['maxWidth'] = maxWidth
    return { props, style }
}

export {useGridStyle}
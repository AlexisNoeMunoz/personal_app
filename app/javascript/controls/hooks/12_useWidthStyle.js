
const useWidthStyle = ({
    style = {},    
    w100 = false,    
    maxWidth = '',
    ...props }) => {
         
    if(w100) style['width'] = '100%'
    style['maxWidth'] = maxWidth
    return { props, style }
}

export {useWidthStyle}


import { string, object, bool } from "prop-types"
const useWidthPropTypes = () => ({
    style: object,        
    w100: bool,    
    maxWidth: string,
})

export {useWidthPropTypes}
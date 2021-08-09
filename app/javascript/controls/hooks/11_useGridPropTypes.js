

import { string, object, bool } from "prop-types"
const useGridPropTypes = () => ({
    style: object,    
    alignX: string,
    alignY: string,
    alignContentX: string,
    alignContentY: string,
    gap: string,
    w100: bool,
    pad: string,
    direction: string,
    maxWidth: string,
})

export default useGridPropTypes
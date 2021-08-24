
import { TextField } from 'controls'
import { forwardRef } from "react"

const TextArea = forwardRef((props, ref) =>
    <TextField {...props} ref={ref} textarea />
)

TextArea.displayName = 'TextArea'
export { TextArea }
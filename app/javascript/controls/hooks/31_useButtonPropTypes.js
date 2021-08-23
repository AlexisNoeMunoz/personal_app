
import { bool, string } from 'prop-types'

const useButtonPropTypes = () => ({
    type: string,   
    anchor: bool,
    submit: bool,
})

export { useButtonPropTypes }
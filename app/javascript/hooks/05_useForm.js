
import { useRef } from "react"
import { useStringState } from "hooks"

const useForm = (fields = {}) => {
    const form = {}, fieldsEntries = Object.entries(fields)
    fieldsEntries.forEach(([key, config = []]) => {
        const value = (config[0] == undefined) ? "" : config[0]
        const useHookState = config[1] || useStringState
        form[key] = useHookState(value)
        form[`$${key}`] = useRef()
    })
    form.__validate = () => {
        const validations = fieldsEntries.map(([key]) => {
            const field = form[`$${key}`].current
            return field.validate()
        })
        return !validations.includes(false)
    }
    return form
}

export { useForm }
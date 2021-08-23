
import { useRef } from "react"
import { useStringState } from "hooks"

const useForm = (fields = {}) => {
    const form = {}, fieldsEntries = Object.entries(fields)
    fieldsEntries.forEach(([key, value]) => {        
        form[key] = useStringState(value)     
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
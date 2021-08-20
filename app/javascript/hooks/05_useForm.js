
import { useRef } from "react"
import { useStringState } from "hooks"

const useForm = (fields = {}) => {
    let form = {}
    Object.entries(fields).forEach(field => {
        const key = field[0], value = field[1]
        form[key] = useStringState(value)     
        form[`$${key}`] = useRef()
    })
    return form
}

export { useForm }

import API from 'API'
import { createLoader } from 'controls'

const getActions = ({ form, fields, $loaderContainer }) => {

    return {
        handleLogin: async () => {            
            const { email, password } = form
            const validations = fields.map(key => {
                const field = form[`$${key}`].current
                return field.validate()
            })
            if (validations.includes(false)) return null

            const closeLoader = createLoader($loaderContainer.current)
            await API.User.login({
                email: email.value,
                password: password.value,
            })
            closeLoader()
        }
    }
}

export default getActions
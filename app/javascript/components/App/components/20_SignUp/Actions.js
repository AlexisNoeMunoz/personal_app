
import API from 'API'
import { createLoader } from 'controls'

const getActions = ({ form, fields, $loaderContainer}) => {
    return {
        signUpHandle: async () => {            
            const { user, email, password, confirmPassword, $confirmPassword } = form
            const validations = fields.map(key => {
                const field = form[`$${key}`].current
                return field.validate()
            })
            if (password.value !== confirmPassword.value) {
                $confirmPassword.current.sendCustomError('Las contraseñas no coinciden')
                validations.push(false)
            }
            if (validations.includes(false)) return null

            const closeLoader = createLoader($loaderContainer.current)
            await API.User.signUp({
                name: user.value,
                email: email.value,
                password: password.value
            })
            closeLoader()
        }
    }
}
export default getActions
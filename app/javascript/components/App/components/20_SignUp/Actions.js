
import API from 'API'
import { createLoader } from 'controls'

const getActions = ({ form, $loaderContainer}) => {
    return {
        signUpHandler: async () => {            
            const { user, email, password, confirmPassword, $confirmPassword } = form
            const valid = form.__validate()
            if (password.value !== confirmPassword.value) {
                $confirmPassword.current.sendCustomError('Las contraseñas no coinciden')
                return null
            }
            if(!valid) return null

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

import API from 'API'
import { createLoader } from 'controls'

const getActions = ({ form, $loaderContainer}) => {
    return {
        signUpHandler: async () => {            
            const { password, confirmPassword, $confirmPassword } = form
            const valid = form.__validate()
            if (password[0] !== confirmPassword[0]) {
                $confirmPassword.current.sendCustomError('Las contraseñas no coinciden')
                return null
            }
            if(!valid) return null

            const closeLoader = createLoader($loaderContainer.current)            
            await API.User.signUp(form.__getData())
            closeLoader()
        }
    }
}
export default getActions
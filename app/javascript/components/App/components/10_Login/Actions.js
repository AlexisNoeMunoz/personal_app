
import API from 'API'
import { createLoader } from 'controls'

const getActions = ({ form, $loaderContainer }) => {

    return {
        loginHandler: async () => {            
            const { email, password } = form            
            if(!form.__validate()) return null

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
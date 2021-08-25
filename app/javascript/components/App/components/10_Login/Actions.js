
import API from 'API'
import { createLoader } from 'controls'

const getActions = ({ form, $loaderContainer }) => {

    return {
        loginHandler: async () => {                        
            if(!form.__validate()) return null

            const closeLoader = createLoader($loaderContainer.current)            
            await API.User.login(form.__getData())            
            closeLoader()
        }
    }
}

export default getActions
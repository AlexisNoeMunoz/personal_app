
import request from 'API/request'

const User = {
    login: ({ email, password }) => {
        return request({
            url: 'user/login',
            method: 'POST',
            data: { email, password },            
        })
    },
    logout: () => {
        return request({
            url: 'user/logout',
            method: 'DELETE'
        })
    },
    signUp: ({ name, email, password }) => {
        return request({
            url: 'user/create',
            method: 'POST',
            data: { name, email, password }
        })        
    },
    get: () => {
        return request({
            url: 'user/get',              
        })
    },
    getCurrent: () => {
        return request({
            url: 'user/get_current',            
        })
    },
}
export { User }
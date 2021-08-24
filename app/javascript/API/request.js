
import { showErrorMessage } from 'controls'
import { request } from 'scripts/request'

const requestAPI = async ({ url, ...props }) => {
    try {
        return await request({
            ...props,
            url: '/api/' + url,
        })
    } catch ({ response, xhr }) {
        if (xhr.status == 400) {
            showErrorMessage(response.errors)
        } else console.error(`API Error`)        
    }
}

export default requestAPI
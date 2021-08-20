
import { showErrorMessage } from 'controls'
import { request } from 'scripts/request'

const requestAPI = async ({ url, ...props }) => {
    try {
        return await request({
            ...props,
            url: '/api/' + url,
        })
    } catch ({ errors, xhr }) {
        if (xhr.status == 400) {
            showErrorMessage(errors)
        } else throw `API Error: ${response}`
    }
}

export default requestAPI
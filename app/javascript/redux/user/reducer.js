
import methods from './methods'

const data = {}

const userReducer = (state = data, { payload, type }) => {
    switch (type) {
        case methods.GET: return payload
        default: return state
    }
}

export { userReducer }
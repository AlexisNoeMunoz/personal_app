
import methods from './methods'

const userReducer = (state = {}, { payload, type }) => {    
    switch (type) {
        case methods.GET: return { ...payload }
        case methods.NEW:
            state[payload.id] = { ...payload }
            return { ...state }
        default: return state
    }
}

const currentUserReducer = (state = {}, { payload, type }) => {
    switch (type) {
        case methods.GET_CURRENT_USER: return { ...payload }
        default: return state
    }
}

export { userReducer, currentUserReducer }

import methods from './methods'

const data = {
    users: true,
    posts: true,
}

const systemLoadersReducer = (state = data, { payload, type }) => {
    switch (type) {
        case methods.SET_USERS: return { ...state, users: payload }
        case methods.SET_POSTS: return { ...state, posts: payload }
        default: return { ...state }
    }
}

export { systemLoadersReducer }
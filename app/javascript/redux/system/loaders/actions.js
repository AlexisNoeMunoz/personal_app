
import methods from './methods'

export default {
    SET_USERS: (activate = false) => ({ type: methods.SET_USERS, payload: activate }),
    SET_POSTS: (activate = false) => ({ type: methods.SET_POSTS, payload: activate }),
}
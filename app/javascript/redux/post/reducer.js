
import methods from './methods'

const __LIKE = (post) => {
    post.liked = !post.liked
    post.likes = post.likes + (post.liked ? 1 : -1)
    if (post.liked && post.disliked)
        post.dislikes = post.dislikes - 1
    post.disliked = false
    return post
}

const __DISLIKE = (post) => {
    post.disliked = !post.disliked
    post.dislikes = post.dislikes + (post.disliked ? 1 : -1)
    if (post.disliked && post.liked)
        post.likes = post.likes - 1
    post.liked = false
    return post
}

const postReducer = (state = {}, { payload, type }) => {
    switch (type) {
        case methods.GET: return {...payload}
        case methods.INSERT:
            state[payload.id] = payload
            return {...state}
        case methods.LIKE:
            state[payload] = __LIKE({ ...state[payload] })
            return {...state}
        case methods.DISLIKE:
            state[payload] = __DISLIKE({ ...state[payload] })
            return {...state}
        default: return state
    }
}

const postOrderedReducer = (state = [], { payload, type }) => {
    switch (type) {
        case methods.GET_ORDER: return payload
        case methods.INSERT_ORDER: return [payload, ...state]
        default: return state
    }
}

const postQuantityReducer = (state = 0, {payload, type}) => {
    switch(type){
        case methods.DECREMENT_NEW_POST: return state - 1
        case methods.INCREMENT_NEW_POST: return state + 1
        case methods.RESET_NEWS_POSTS: return 0
        default: return state
    }
}

export { postReducer, postOrderedReducer, postQuantityReducer }
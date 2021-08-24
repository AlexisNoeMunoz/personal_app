
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
        case methods.GET: return {...payload, ...state}
        case methods.GET_OLD: return {...state, ...payload}
        case methods.INSERT:
            state[payload.id] = payload
            return {...state}
        case methods.LIKE:
            state[payload] = __LIKE({ ...state[payload] })
            return {...state}
        case methods.DISLIKE:
            state[payload] = __DISLIKE({ ...state[payload] })
            return {...state}
        case methods.SET_REACTIONS:
            state[payload.post_id] = {
                ...state[payload.post_id], 
                likes: payload.likes,
                dislikes: payload.dislikes
            }
            return {...state}
        default: return state
    }
}

const postOrderedReducer = (state = [], { payload, type }) => {
    switch (type) {
        case methods.GET_ORDER: return [...payload, ...state]
        case methods.GET_OLD_ORDER: return [...state, ...payload]
        case methods.INSERT_ORDER: return [payload, ...state]
        default: return [...state]
    }
}

const newPostReducer = (state = 0, {payload, type}) => {
    switch(type){        
        case methods.INCREMENT_NEW_POST: return state + 1
        case methods.RESET_NEWS_POSTS: return 0
        default: return state
    }
}

export { postReducer, postOrderedReducer, newPostReducer }
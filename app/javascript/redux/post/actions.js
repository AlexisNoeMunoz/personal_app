
import SystemLoadersActions from 'redux/system/loaders/actions'

import methods from './methods'
import API from 'API'

export default {
    GET: () => async (dispatch, getState) => {        
        dispatch(SystemLoadersActions.SET_POSTS(true))
        dispatch({ type: methods.RESET_NEWS_POSTS })
        const response = await API.Post.get()
        dispatch({ type: methods.GET, payload: response.data })
        dispatch({ type: methods.GET_ORDER, payload: response.order })        
        dispatch(SystemLoadersActions.SET_POSTS(false))
    },
    CREATE: (data) => async (dispatch, getState) => {
        const response = await API.Post.create(data)
        if (response) {
            dispatch({ type: methods.INSERT, payload: response })
            dispatch({ type: methods.INSERT_ORDER, payload: response.id })
            dispatch({ type: methods.DECREMENT_NEW_POST })            
        }
        return response
    },
    LIKE: ({ post_id, post_liked }) => (dispatch, getState) => {
        dispatch({ type: methods.LIKE, payload: post_id })
        API.Post.like({ post_id, remove: post_liked })
    },
    DISLIKE: ({ post_id, post_disliked }) => (dispatch, getState) => {
        dispatch({ type: methods.DISLIKE, payload: post_id })
        API.Post.dislike({ post_id, remove: post_disliked })
    },
    NEW_POST: () => ({ type: methods.INCREMENT_NEW_POST }),
    RESET_NEWS_POSTS: () => ({type: methods.RESET_NEWS_POSTS})
}
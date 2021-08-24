
import SystemLoadersActions from 'redux/system/loaders/actions'

import methods from './methods'
import API from 'API'

export default {        
    GET: (posts) => async (dispatch, getState) => {        
        dispatch(SystemLoadersActions.SET_POSTS(true))                                   
            dispatch({ type: methods.RESET_NEWS_POSTS })
            const response = await API.Post.get({ limit: posts })
            dispatch({ type: methods.GET, payload: response.data })
            dispatch({ type: methods.GET_ORDER, payload: response.order })            
        dispatch(SystemLoadersActions.SET_POSTS(false))
    },
    GET_OLD: (quantity) => async (dispatch, getState) => {                     
        const response = await API.Post.get({ skip: quantity })
        await dispatch({ type: methods.GET_OLD, payload: response.data })
        await dispatch({ type: methods.GET_OLD_ORDER, payload: response.order })        
        return response
    },
    CREATE: (data) => async (dispatch, getState) => {
        const response = await API.Post.create(data)
        if (response) {
            dispatch({ type: methods.INSERT, payload: response })
            dispatch({ type: methods.INSERT_ORDER, payload: response.id })
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
    SET_REACTIONS: ({ post_id, likes, dislikes }) =>
        ({ type: methods.SET_REACTIONS, payload: { post_id, likes, dislikes } }),
    NEW_POST: () => ({ type: methods.INCREMENT_NEW_POST }),
    RESET_NEWS_POSTS: () => ({ type: methods.RESET_NEWS_POSTS })
}
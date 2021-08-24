
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { userReducer, currentUserReducer } from './user/reducer'
import { postReducer, postOrderedReducer, newPostReducer } from './post/reducer'
import { systemLoadersReducer } from './system/loaders/reducer'

const rootReducer = combineReducers({
    users: userReducer,
    current_user: currentUserReducer,
    posts: postReducer,
    posts_order: postOrderedReducer,
    news_posts: newPostReducer,
    system__loaders: systemLoadersReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
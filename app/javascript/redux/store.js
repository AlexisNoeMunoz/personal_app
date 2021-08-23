
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { userReducer } from './user/reducer'
import { postReducer, postOrderedReducer, postQuantityReducer } from './post/reducer'
import { systemLoadersReducer } from './system/loaders/reducer'

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    posts_order: postOrderedReducer,
    news_posts: postQuantityReducer,
    system__loaders: systemLoadersReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store
}

export default configureStore

import { useEffect } from 'react'
import { useDispatch, Provider } from 'react-redux'
import store from 'redux/store'

import UserActions from 'redux/user/actions'
import PostActions from 'redux/post/actions'

import { createPostChannel, createUserChannel } from 'channels'

const ReduxActionsLoader = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(UserActions.GET_CURRENT())
        dispatch(UserActions.GET())
        dispatch(PostActions.GET())

        createPostChannel(dispatch)
        createUserChannel(dispatch)
    }, [])
    return null
}

const ReduxProvider = ({ children }) =>
    <Provider store={store}>
        {children}
        <ReduxActionsLoader />
    </Provider>

export { ReduxProvider }
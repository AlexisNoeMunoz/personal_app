
import { useEffect } from 'react'
import { useDispatch, Provider } from 'react-redux'
import configureStore from 'redux/store'

import UserActions from 'redux/user/actions'
import PostActions from 'redux/post/actions'

import { createPostChannel } from 'channels'

const ReduxActionsLoader = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(UserActions.GET())
        dispatch(PostActions.GET())

        createPostChannel(dispatch)
    }, [])
    return null
}

const ReduxProvider = ({ children }) =>
    <Provider store={configureStore()}>
        {children}
        <ReduxActionsLoader />
    </Provider>

export { ReduxProvider }
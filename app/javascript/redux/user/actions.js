
import SystemLoadersActions from 'redux/system/loaders/actions'

import methods from './methods'
import API from 'API'

export default {
    GET: () => async (dispatch, getState) => {
        dispatch(SystemLoadersActions.SET_USERS(true))
        const response = await API.User.get()
        dispatch({ type: methods.GET, payload: response })
        dispatch(SystemLoadersActions.SET_USERS(false))
    },
}
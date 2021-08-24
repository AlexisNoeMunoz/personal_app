
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
    GET_CURRENT: () => async (dispatch, getState) => {
        const response = await API.User.getCurrent()
        dispatch({ type: methods.GET_CURRENT_USER, payload: response })
    },
    NEW: (response) => ({ type: methods.NEW, payload: response }),
}
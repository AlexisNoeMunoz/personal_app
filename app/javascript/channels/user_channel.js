
import consumer from './consumer'
import UserActions from 'redux/user/actions'

const createUserChannel = (dispatch) => consumer.subscriptions.create('UserChannel', {
    connected() {        
    },
    disconnected() {
    },
    received({ type, user_id, payload }) {           
        switch (type) {
            case 'NEW_USER':
                dispatch(UserActions.NEW(payload))
                break
        }
    }
})

export { createUserChannel }

import consumer from './consumer'
import store from 'redux/store'
import PostActions from 'redux/post/actions'

const createPostChannel = (dispatch) => consumer.subscriptions.create('PostChannel', {
    connected() {
    },
    disconnected() {
    },
    received({ type, user_id, payload }) {
        const { current_user } = store.getState()    
        switch (type) {
            case 'NEW_POST':
                if (current_user.id != user_id) 
                    dispatch(PostActions.NEW_POST())
                break
            case 'NEW_LIKE':
                dispatch(PostActions.SET_REACTIONS({ ...payload }))
                break
        }        
    }
})

export { createPostChannel }
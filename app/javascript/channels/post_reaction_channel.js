
import consumer from './consumer'
import PostActions from 'redux/post/actions'

const createPostReactionChannel = (dispatch) => consumer.subscriptions.create('PostChannel', {
    connected() {        
    },
    disconnected() {        
    },
    received(payload) {                
        dispatch(PostActions.NEW_POST())
    }
})

export { createPostReactionChannel }
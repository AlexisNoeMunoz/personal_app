
import consumer from './consumer'
import PostActions from 'redux/post/actions'

const createPostChannel = (dispatch) => consumer.subscriptions.create('PostChannel', {
    connected() {        
    },
    disconnected() {        
    },
    received({type, payload}) {                
        dispatch(PostActions.NEW_POST())
    }
})

export { createPostChannel }
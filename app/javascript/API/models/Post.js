
import request from 'API/request'

const Post = {
    create: ({ message }) => {
        return request({
            url: 'post/create',
            method: 'POST',
            data: { message }
        })
    },
    get: ({ skip = 0, limit = 20 }) => {
        return request({
            url: 'post/get',            
            data: { skip, limit },
        })
    },
    like: ({ post_id, remove = false }) => {
        return request({
            url: 'post/like',
            method: remove ? 'DELETE' : 'POST',
            data: { post_id }
        })
    },
    dislike: ({ post_id, remove = false }) => {
        return request({
            url: 'post/dislike',
            method: remove ? 'DELETE' : 'POST',
            data: { post_id }
        })
    },
}

export { Post }
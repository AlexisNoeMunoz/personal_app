
import { Flex, ButtonClean, Text, Icon } from 'controls'
import { useDispatch } from 'react-redux'

import PostActions from 'redux/post/actions'

const PostReactions = ({ post = {} }) => {
    const dispatch = useDispatch()

    const likeHandler = () =>     
        dispatch(PostActions.LIKE({ post_id: post.id, post_liked: post.liked }))    

    const dislikeHandler = () => 
        dispatch(PostActions.DISLIKE({ post_id: post.id, post_disliked: post.disliked }))    

    const likeClass = `app__POST__like ${post.liked ? 'app__POST__like--active' : ''}`
    const dislikeClass = `app__POST__dislike ${post.disliked ? 'app__POST__dislike--active' : ''}`
    return (
        <Flex w100 alignX='flex-end' gap='2em' pad='1em'>

            <Flex alignY='flex-end' gap='0.5em' className={likeClass}>
                <ButtonClean className='app__POST__like__button' onClick={likeHandler}>
                    <Icon icon='like' />
                </ButtonClean>
                <Text className='app__POST__like__counter'>{post.likes || 0}</Text>
            </Flex>

            <Flex alignY='flex-end' gap='0.5em' className={dislikeClass}>
                <ButtonClean className='app__POST__dislike__button' onClick={dislikeHandler}>
                    <Icon icon='dislike' />
                </ButtonClean>
                <Text className='app__POST__dislike__counter'>{post.dislikes || 0}</Text>
            </Flex>

        </Flex>
    )
}

export default PostReactions
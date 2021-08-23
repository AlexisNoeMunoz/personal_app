
import { ButtonClean, Text } from 'controls'
import { useDispatch } from 'react-redux'

import PostActions from 'redux/post/actions'

const NewsPostsTag = ({ news_posts }) => {
    
    const dispatch = useDispatch()
    const onClickHandler = () => {
        dispatch(PostActions.GET())
    }
    
    if (news_posts == 0) return null    
    return (
        <ButtonClean className='app__NEWS_POSTS' onClick={onClickHandler}>
            <Text>
                +{news_posts} {news_posts == 1 ? 'Publicación Nueva' : 'Publicaciones Nuevas'}
            </Text>
        </ButtonClean>
    )
}

export { NewsPostsTag }
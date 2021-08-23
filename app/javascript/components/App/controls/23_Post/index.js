
import { Grid, Text } from 'controls'
import PostUser from './PostUser'
import PostReactions from './PostReactions'

const Post = ({ post = {}, user = {} }) => {
    return (
        <Grid w100 className='app__POST' maxWidth='40em'>
            <PostUser user={user} />
            <Text className='app__POST__message' w100>
                {post.message}
            </Text>
            <PostReactions post={post} />
        </Grid>
    )
}

export { Post }
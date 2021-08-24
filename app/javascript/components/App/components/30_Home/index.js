
import { Grid, Divisor, LoaderIcon, Portal, Tag } from 'controls'
import { Header, PostPublisher, Post, NewsPostsTag, LazyPost } from 'components/App/controls'

import { useSelector } from 'react-redux'
import { useRootContainer } from 'hooks'

const Home = () => {
    const users = useSelector(store => store.users)
    const posts = useSelector(store => store.posts)
    const posts_order = useSelector(store => store.posts_order)
    const news_posts = useSelector(store => store.news_posts)
    const system__loaders = useSelector(store => store.system__loaders)

    return (
        <Grid className='app__home' gap='0em'>
            <Portal container={useRootContainer()}>
                <Header />
            </Portal>
            <Grid w100 maxWidth='55em' alignContentY='start' className='app__home__container'>
                <Tag w100 type='warning'>Esto es una DEMO, todo funciona en tiempo real. ¡Disfruta!</Tag>
                <PostPublisher />
                <Divisor space='1em' />
                <Grid w100 gap='2em'>
                    {system__loaders.posts && <LoaderIcon size='2em' type='neutral' />}
                    {posts_order.map(id => {
                        const post = posts[id]
                        const user = users[post.user_id]
                        return <Post post={post} user={user} key={id} />
                    })}
                </Grid>
                <LazyPost />
                <NewsPostsTag news_posts={news_posts} />
            </Grid>
        </Grid>
    )
}

export { Home }
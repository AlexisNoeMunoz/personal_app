
import { Grid, Divisor, LoaderIcon } from 'controls'
import { AbstractGrid, Header, PostPublisher, Post, NewsPostsTag } from 'components/App/controls'

import { useSelector } from 'react-redux'

const Home = () => {
    const users = useSelector(store => store.users)
    const posts = useSelector(store => store.posts)
    const posts_order = useSelector(store => store.posts_order)
    const news_posts = useSelector(store => store.news_posts)
    const system__loaders = useSelector(store => store.system__loaders)

    return (
        <AbstractGrid className='app__home' alignContentY='start' gap='0'>
            <Header />  
            <Grid w100 maxWidth='50em' pad='3em 1em' gap='2em'>
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
                <NewsPostsTag news_posts={news_posts} />
            </Grid>
        </AbstractGrid>
    )
}

export { Home }
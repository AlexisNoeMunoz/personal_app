
import { LoaderIcon } from 'controls'
import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import PostActions from 'redux/post/actions'

const LazyPost = () => {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [atFinal, setAtFinal] = useState(false)
    const posts_order = useSelector(store => store.posts_order)
    const $element = useRef()

    useEffect(() => {

        const onChange = async ([el]) => {
            const quantity = posts_order.length
            if (el.isIntersecting && quantity > 0 && !atFinal && !show) {
                setShow(true)                
                const { order } = await dispatch(PostActions.GET_OLD(quantity))
                if (order.length == 0) setAtFinal(true)                
                setShow(false)
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })
        observer.observe($element.current)
        return () => observer.disconnect()
    }, [posts_order, show, atFinal])

    return (
        <div ref={$element}>
            {posts_order.length > 0 &&
                <LoaderIcon size='2em' type='neutral' loaded={!show} />
            }
        </div>
    )
}

export { LazyPost }
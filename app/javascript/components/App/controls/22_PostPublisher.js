
import { Form, TextArea, Button, Text, Grid, createLoader } from 'controls'

import { useRef } from 'react'
import { useForm } from 'hooks'
import { useDispatch } from 'react-redux'
import { ObjectHelper } from 'helpers'

import PostActions from 'redux/post/actions'

const PostPublisher = () => {    
    const form = useForm(ObjectHelper.fillFromArray(['message']))
    const $loaderContainer = useRef()
    const dispatch = useDispatch()
    
    const formHandler = async () => {        
        if (!form.__validate()) return null
        
        const [message, setMessage] = form.message
        const closeLoader = createLoader($loaderContainer.current)        
        const response = await dispatch(PostActions.CREATE({message}))        
        if(response) setMessage('')
        closeLoader()
    }

    const formProps = {
        className: 'app__POST_PUBLISHER',
        onSubmit: formHandler,
        gap: '0.5em',
        ref: $loaderContainer,           
    }

    return (
        <Form {...formProps} >
            <Text className='app__POST_PUBLISHER__title'>
                ¡Cuéntanos algo!
            </Text>
            <Grid w100 pad='1em' gap='1em'>
                <TextArea
                    w100
                    placeholder='¿Cómo va tu día?'
                    required                    
                    ref={form.$message}
                    value={form.message[0]}
                    onChange={form.message[1]}                    
                />
                <Button submit type='success'>
                    Publicar
                </Button>
            </Grid>
        </Form>
    )
}

export { PostPublisher }
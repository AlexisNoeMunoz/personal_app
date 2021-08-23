
import { array, func } from "prop-types"
import { Flex, Title, List, ListItem, Button, Portal } from "controls"
import { render, unmountComponentAtNode } from 'react-dom'
import { useEffect, useRef } from "react"

const ErrorMessage = ({ errors = [], hide = () => { } }) => {
    const $button = useRef()
    useEffect(() => {        
        $button.current.focus()
    }, [])

    return (
        <Portal>
            <Flex className='ERROR_MESSAGE' alignX='center' alignY='center'>
                <Flex className='ERROR_MESSAGE__MODAL' direction='column' gap='1em' alignX='center'>
                    <Title>¡Ups!</Title>
                    <List indent='2em' w100>
                        {errors.map((error, key) =>
                            <ListItem key={key}>{error}</ListItem>
                        )}
                    </List>
                    <Button type='danger' onClick={hide} maxWidth='10em' ref={$button}>
                        Entendido
                    </Button>
                </Flex>
            </Flex>
        </Portal>
    )
}

ErrorMessage.propTypes = {
    errors: array,
    hide: func,
}

const showErrorMessage = (errors) => {
    const $container = document.createElement('div')
    document.documentElement.append($container)
    const hide = () => {
        unmountComponentAtNode($container)
        $container.remove()
    }
    render(<ErrorMessage {...{ errors, hide }} />, $container)
    return hide
}

export { showErrorMessage }
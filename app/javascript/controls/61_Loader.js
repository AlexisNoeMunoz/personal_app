
import { Flex, LoaderIcon, Text, Portal, WindowLoader } from 'controls'
import { render, unmountComponentAtNode } from 'react-dom'

const Loader = ({show = false}) => {   
    if(!show) return null
    return (
        <Flex alignY='center' alignX='center' className='LOADER' wrap gap='1em'>
            <Text>Cargando</Text>
            <LoaderIcon size='1.5em' />
        </Flex>        
    )
}

const createLoader = ($element, window = false) => {        
    const $container = document.createElement('div')
    document.documentElement.append($container)
    const NewLoader = () => (
        <Portal container={$element}>
            <Loader show />
        </Portal>
    )
    if(!$element) window = true
    render(window ? <WindowLoader /> : <NewLoader />, $container)

    return () => {
        unmountComponentAtNode($container)
        $container.remove()
    }
}

export { Loader, createLoader }
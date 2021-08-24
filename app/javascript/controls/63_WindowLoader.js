
import { Flex, LoaderIcon, Text, createLoader } from 'controls'

const WindowLoader = () => {
    return (
        <Flex alignY='center' alignX='center' className='TURBOLINKS_LOADER' wrap gap='1em'>
            <Text>Cargando</Text>
            <LoaderIcon />
        </Flex>
    )
}

const createWindowLoader = () => createLoader(null, true)

export { WindowLoader, createWindowLoader }
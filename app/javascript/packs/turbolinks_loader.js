
import { render, unmountComponentAtNode } from 'react-dom'
import { WindowLoader } from 'controls'

const createTurbolinksLoader = async () => {
    const $container = document.createElement('div')

    document.addEventListener("turbolinks:request-start", () => {
        document.documentElement.append($container)
        render(<WindowLoader />, $container)
    })

    document.addEventListener("turbolinks:request-end", () => {
        unmountComponentAtNode($container)
        $container.remove()
    })

    window.addEventListener('beforeunload', () => {        
        document.documentElement.append($container)
        render(<WindowLoader />, $container)
    })
}

export default createTurbolinksLoader
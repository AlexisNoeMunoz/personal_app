
import { useRootContainer } from 'hooks'

const useScrollInSections = ({ up = false, elements = [], scroll = useRootContainer() }) => {
    let newPos = 0

    for (let i in elements) {
        let pos = elements[i].getBoundingClientRect().top
        if (up) {
            if (pos + 1 < 0) newPos = scroll.scrollTop + pos
        } else {
            if (pos - 1 > 0) {
                scroll.scrollTop = scroll.scrollTop + pos
                break
            }
        }
    }

    if (up) scroll.scrollTop = newPos
}

export {useScrollInSections}

import { useHistory } from "react-router";

const useRedirect = (route='/') => {
    const history = useHistory()
    return () => {
        history.push(route)
    }
}

export {useRedirect}
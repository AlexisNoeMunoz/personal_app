
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom"
import { Home } from "components/App/components"
// import { APIProvider } from 'API'

const Router = () => {
    const path = '/app'
    return (
        
            <BrowserRouter>
                <Switch>
                    <Route path={`${path}/inicio`} exact>
                        <Home />
                    </Route>
                    <Route path="/">
                        <Redirect to={`${path}/inicio`} />
                    </Route>
                </Switch>
            </BrowserRouter>
        
    )
}

export default Router
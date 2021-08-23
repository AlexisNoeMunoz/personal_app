
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom"
import { Home } from "components/App/components"
import { ReduxProvider } from 'components/App/controls'

const Router = () => {
    const path = '/app'
    return (
        <ReduxProvider>
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
        </ReduxProvider>
    )
}

export default Router
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom"
import { Login, SignUp } from "components/App/components"

const Router = () => {
    const path = '/app'
    return (        
        <BrowserRouter>
            <Switch>
                <Route path={path} exact>
                    <Login />
                </Route>
                <Route path={`${path}/registro`} exact>
                    <SignUp />
                </Route>
                <Route path="/">
                    <Redirect to={path} />
                </Route>
            </Switch>
        </BrowserRouter>        
    )
}

export default Router
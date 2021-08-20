import { Route, Redirect, BrowserRouter, Switch} from "react-router-dom"
import Home from 'components/Home'

const Router = () => {                    
    return (
        <BrowserRouter>          
            <Switch>                               
                <Route path="/" exact>
                    <Home />    
                </Route>   
                <Route path="/">
                    <Redirect to="/" />
                </Route>             
            </Switch>    
        </BrowserRouter>                 
    )
}

export default Router
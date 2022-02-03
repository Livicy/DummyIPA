import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {AuthProvider} from './components/Auth';
import {UserRoute, NonUserRoute} from './components/CustomRoute';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Signup} from "./Signup";
import {Login} from './Login';
import {Dashboard} from "./Dashboard";

export function App() {
    return (
        <Router>
            <AuthProvider>
                <Switch>
                    <UserRoute exact path='/dashboard' component={Dashboard}/>
                    <NonUserRoute exact path="/signup" component={Signup}/>
                    <NonUserRoute exact path="/login" component={Login}/>
                    <Route exact path="*" render={() => (<Redirect to="/login"/>)}/>
                </Switch>
            </AuthProvider>
        </Router>
    );
}

export default App;

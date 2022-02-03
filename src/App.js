

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider } from './components/Auth';
import { PrivateRoute, LoggedOutRoute } from './components/CustomRoute';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Signup } from "./Signup";
import { Login } from './Login';
import { Dashboard} from "./Dashboard";

export function App() {
  return (


      <Router>
        <AuthProvider>
          <Switch>
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <LoggedOutRoute exact path="/signup" component={Signup} />
            <LoggedOutRoute exact path="/login" component={Login} />
              <Route exact path="*" render={() => (<Redirect to="/login" />)} />

          </Switch>
        </AuthProvider>
      </Router>

  );
}

export default App;

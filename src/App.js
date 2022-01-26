import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';

function App() {

  const isLoggedIn = localStorage.getItem('token');

  return (
    <div className="App">
      <h2>Client Auth Project</h2>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/login' >Login.</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
            <li>
              {isLoggedIn && <Link to='/friends' >Friends List.</Link>}
            </li>
          </ul>
          <Switch>
            <PrivateRoute exact path='/friends' component={FriendsList} />
            <Route path='.logout' component={Logout} />
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

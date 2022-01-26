import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';
import AddFriend from './components/AddFriend';

function App() {

  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
          
            <ul>
              <li>
                <Link to='/login' >Login.</Link>
              </li>
              <li>
                <Link to='/logout'>Logout.</Link>
              </li>
              <li>
                <Link to='/friends/add'>Add Friend.</Link>
              </li>
              <li>
                <Link to='/friends' >Friends List.</Link>
              </li>
            </ul>
            <Switch>
              <Route path='/logout' component={Logout} />
              <PrivateRoute path='/friends/add' component={AddFriend} />
              <PrivateRoute path='/friends' component={FriendsList} />
              <Route path='/login' component={Login} />
              <Route path='/' component={Login} /> 
            </Switch>
          
      </div>
    </Router>
  );
}

export default App;

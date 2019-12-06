import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './Containers/Header.js'
import Guide from './Containers/Guide.js'
import Demo from './Containers/Demo.js'
import Login from './Containers/Login.js'
import Admin from './Containers/Admin.js'
import Properties from './Containers/Properties.js'
import Sites from './Containers/Sites.js'

class App extends Component {

  render() {
    return (
      <div className="App" >
        <Route component={Header} />
        <Switch>
          <Route exact path="/" render={({ location, history }) => <Demo query={location.hash} history={history} />} />
          <Route exact path="/guide" render={({ location, history }) => <Guide query={location.hash} history={history} />} />
          <Route exact path="/login" render={({ location, history }) => <Login query={location.hash} history={history} />} />
          <Route exact path="/admin" render={({ location, history }) => <Admin query={location.hash} history={history} />} />
          <Route exact path="/properties" render={({ location, history }) => <Properties query={location.hash} history={history} />} />
          <Route exact path="/sites" render={({ location, history }) => <Sites query={location.hash} history={history} />} />

        </Switch>

      </div>
    );
  }
}

export default App;

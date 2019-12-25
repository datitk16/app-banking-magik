import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, HashRouter, Redirect } from 'react-router-dom';
import Admin from './components/admin/Admin';
import Login from './components/login/Login'
import NotFound from './containers/NotFound/NotFound'
class App extends Component {
  updateApp=()=>{
    console.log('Hello')
    this.forceUpdate()
  }
  render() {
    const token = localStorage.getItem('tokenTimo')

    //khi het thoi gian token tra ve gi
    return (
      // <Admin />
      <Router>
    
        <Switch>
          <Route path="/" exact render={(props) => {
            if (token) return <Redirect to='/admin' />
            return <Login {...props} updateApp={this.updateApp}/>
          }} />
          <Route path='/admin' updateApp={this.updateApp} component={token ? Admin : NotFound} />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    );
  }

}

export default App;

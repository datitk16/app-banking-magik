import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import routes from './routes/Routes'
import AdminAccContainer from './containers/AdminAccContainer/AdminAccContainer';
import Admin from './components/admin/Admin';

class App extends Component {
  render() {
    //khi het thoi gian token tra ve gi
    return (
      <Admin />
    );
  }

}

export default App;

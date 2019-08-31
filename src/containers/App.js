import React, { Component } from 'react';
import {Header,Footer} from '../components'
import {Home, Login} from './'
import { Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    let exPath =['/'];
    let {location} = this.props;
    let isAuth = exPath.includes(location.pathname);
    return (
      <div>
        {!isAuth && <Header />}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
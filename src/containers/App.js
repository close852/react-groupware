import React, { Component } from 'react';
import {Home, Login, Layout} from './'
import { Route, Switch } from 'react-router-dom';
class App extends Component {
  render() {
    let exPath =['/'];
    let {location} = this.props;
    let isAuth = exPath.includes(location.pathname);
    return (
      <Layout isAuth={isAuth}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
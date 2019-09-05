import React, { Component } from 'react';
import { Home, Login, Layout } from './'
import { Route, Switch } from 'react-router-dom';
import axios from 'axios'
class App extends Component {

  state = {
    data: '',
    temp: 123
  }
  componentDidMount() {

    const params = {
      title: '제목',
      content: '본문',
      app_line: [
        {
          user_id: 1,
          user_name: 'jiwoo'
        },
        {
          user_id: 2,
          user_name: 'mira'
        },
      ]

    }
    axios.post('/api/app', params).then((res) => {
      // this.setState({ data: data.data.app_line });
    })
  }


  render() {
    let exPath = ['/'];
    let { location } = this.props;
    let isAuth = exPath.includes(location.pathname);
    let { data, temp } = this.state;
    return (
      <Layout isAuth={isAuth}>
        {data}{temp}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
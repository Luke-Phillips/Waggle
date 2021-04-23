import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout.component';
import { Home } from './components/Home.component';
import { FetchData } from './components/FetchData.component';
import { Counter } from './components/Counter.component';
import Login from './components/login/login.component';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      // <Login></Login>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout> 
    );
  }
}

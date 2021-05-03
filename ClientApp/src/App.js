import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Layout } from './components/Layout.component';
import { Home } from './components/Home.component';
import { FetchData } from './components/FetchData.component';
import { Counter } from './components/Counter.component';
import Navbar from './components/navbar/navbar.component'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component'
import HomePage from './pages/homepage/homepage.component'
import DiscussionPage from './pages/discussion-page/discussion-page.component'
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div className='parent'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/discussion' component={DiscussionPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
      

      /* <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>  */
    );
  }
}

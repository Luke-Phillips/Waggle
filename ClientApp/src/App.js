import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Navbar from './components/navbar/navbar.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import HomePage from './pages/homepage/homepage.component';
import ClassNav from './components/class-nav/class-nav.component';
import DiscussionPage from './pages/discussion-page/discussion-page.component';
import ProfilePage from './pages/profile-page/profile-page.component';
import './custom.css';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <div className='parent'>
        <Navbar />
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' component={HomePage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        <Route path='/hive'>
          <ClassNav userId={6} />
        </Route>
        <Route path='/hive/discussion' component={DiscussionPage} />
        <Route path='/hive/profile' component={ProfilePage} />

        {/* <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/discussion" component={DiscussionPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch> */}
      </div>

      /* <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>  */
    );
  }
}

import React, { useEffect , useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Navbar from './components/navbar/navbar.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import HomePage from './pages/homepage/homepage.component';
import ClassNav from './components/class-nav/class-nav.component';
import DiscussionPage from './pages/discussion-page/discussion-page.component';
import ProfilePage from './pages/profile-page/profile-page.component';
import SettingsPage from './pages/settings-page/settings-page.component';
import { UserAndClassIds } from './components/user-and-class-context/user-and-class-context';
import './custom.css';

const App = () => {
  
  const [classAndUserId, setClassAndUserId] = useState({
    userId: null,
    classId: null,
  });

  useEffect(() => {
    setClassAndUserId({
      userId: '0006',
      classId: 2,
    });
  }, [])

  return (
    <div className='parent'>
      <Navbar />
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>
      <Route path='/home' component={HomePage} />
      <Route path='/signin' component={SignInAndSignUpPage} />

      <UserAndClassIds.Provider value={classAndUserId} >
      <Route path='/hive'>
        <ClassNav userId={'0006'} />
      </Route>
      <Route path='/hive/discussion' component={DiscussionPage} />
      <Route path='/hive/profile' component={ProfilePage} />
      <Route path='/hive/settings' component={SettingsPage} />
      </UserAndClassIds.Provider>

      {/* <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/discussion" component={DiscussionPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch> */}
    </div>
//</UserAndClassIds.Provider>
    /* <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>  */
  );
};
export default App;

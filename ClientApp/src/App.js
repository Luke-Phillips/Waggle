import React, { useEffect , useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Navbar from './components/navbar/navbar.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import HomePage from './pages/homepage/homepage.component';
import ClassNav from './components/class-nav/class-nav.component';
import DiscussionPage from './pages/discussion-page/discussion-page.component';
import ProfilePage from './pages/profile-page/profile-page.component';
import SettingsPage from './pages/settings-page/settings-page.component';
import { UserContext } from './components/user-context/user-context';
import './custom.css';

const App = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [classId, setClassId] = useState(null);

  const handleAuth = (token, userId) => {
    setToken(token);
    setUserId(userId);
  }

  const handleClassSelect = classId => setClassId(classId);

  return (
    <div className='parent'>
      {
        console.log('app.js token: ', token),
        console.log('app.js userId: ', userId)
      }
      <UserContext.Provider value={{
        token: token,
        userId: userId,
        classId: classId
      }}>
        <Navbar />
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' component={HomePage} />
        <Route path='/signin'>
          <SignInAndSignUpPage handleSignInSignUp={handleAuth}/>
        </Route>
        <Route path='/hive'>
          <ClassNav
            userId={'0006'}
            handleClassSelect={handleClassSelect}
          />
        </Route>
        <Route path='/hive/discussion' component={DiscussionPage} />
        <Route path='/hive/profile' component={ProfilePage} />
        <Route path='/hive/settings' component={SettingsPage} />
      </UserContext.Provider>
    </div>
  );
};
export default App;

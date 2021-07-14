import React, { useEffect , useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Navbar from './components/navbar/navbar.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import HomePage from './pages/homepage/homepage.component';
import ClassNav from './components/class-nav/class-nav.component';
import DiscussionPage from './pages/discussion-page/discussion-page.component';
import SettingsPage from './pages/settings-page/settings-page.component';
import { UserContext } from './components/user-context/user-context';
import './custom.css';

const App = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [classId, setClassId] = useState(null);
  const [isMod, setIsMod] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  const handleAuth = (token, userId) => {
    setToken(token);
    setUserId(userId);
  }

  const handleClassSelect = (classId, isModerator, isEnrolled) => {
    setClassId(classId);
    setIsMod(isModerator);
    setIsEnrolled(isEnrolled);
  }
  
  return (
    <div className='parent'>
      {
        console.log('token ', token),
        console.log('userId ', userId),
        console.log('classId ', classId),
        console.log('isMod ', isMod)
      }
      <UserContext.Provider value={{
        token: token,
        userId: userId,
        classId: classId,
        isMod: isMod
      }}>
        <Navbar />
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' component={HomePage} />
        <Route path='/signin'>
          {token ? 
            <Redirect to='/hive/discussion'/> :
            <SignInAndSignUpPage handleSignInSignUp={handleAuth}/>
          }
        </Route>
        <Route path='/hive'>
          <ClassNav
            handleClassSelect={handleClassSelect}
          />
        </Route>
        <Route path='/hive/discussion' component={DiscussionPage} />
        <Route path='/hive/settings' component={SettingsPage} />
      </UserContext.Provider>
    </div>
  );
};
export default App;

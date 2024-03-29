import './App.scss';
import React, { useEffect , useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Navbar from './components/navbar/navbar.component';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';
import HomePage from './pages/homepage/homepage.component';
import ClassNav from './components/class-nav/class-nav.component';
import DiscussionPage from './pages/discussion-page/discussion-page.component';
import SettingsPage from './pages/settings-page/settings-page.component';
import { UserContext } from './components/user-context/user-context';


const App = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [classroomId, setClassroomId] = useState(null);
  const [classroomName, setClassroomName] = useState('');
  const [isModerator, setIsModerator] = useState(false);
  const [enrollmentStatus, setEnrollmentStatus] = useState('pending');

  const handleAuth = (token, userId) => {
    setToken(token);
    setUserId(userId);
  }

  const handleClassSelect = (classroomId, classroomName, isModerator, enrollmentStatus) => {
    setClassroomId(classroomId);
    setClassroomName(classroomName);
    setIsModerator(isModerator);
    setEnrollmentStatus(enrollmentStatus);
  }

  const handleSignOut = () => {
    setToken(null);
    setUserId(null);
    setClassroomId(null);
    setClassroomName('');
    setIsModerator(false);
    setEnrollmentStatus('pending');
  }

  const handleModChange = (isModerator) => {
    setIsModerator(isModerator);
  }

  const handleEnrollChange = (enrollmentStatus) => {
    setEnrollmentStatus(enrollmentStatus);
  }
  
  return (
    <div className='parent'>
      {/* {
        console.log('token ', token),
        console.log('userId ', userId),
        console.log('classroomId ', classroomId),
        console.log('className ', classroomName),
        console.log('isModerator ', isModerator),
        console.log('enrollmentStatus ', enrollmentStatus)
      } */}
      <UserContext.Provider value={{
        token: token,
        userId: userId,
        classroomId: classroomId,
        classroomName: classroomName,
        isModerator: isModerator,
        enrollmentStatus: enrollmentStatus
      }}>
        <Navbar handleSignOut={handleSignOut}/>
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
          {!token ?
            <Redirect to='/signin'/> :
            <ClassNav
              handleClassSelect={handleClassSelect}
            />
          }
        </Route>
        <Route path='/hive/discussion' component={DiscussionPage} />
        <Route path='/hive/settings'>
          <SettingsPage handleModChange={handleModChange}/>
        </Route>
      </UserContext.Provider>
    </div>
  );
};
export default App;

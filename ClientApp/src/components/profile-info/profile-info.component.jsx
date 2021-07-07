import React, { useState } from 'react';
import './profile-info.styles.scss';

const ProfileInfo = ({user, profileChangeHandler}) => {

  // not sure if fetch call will be done in the card or if user info will be passed as props yet
  // for now, it's hardcoded
  const [name, setName] = useState(user.userName);
  const [displayName, setDisplayName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);

  const nameChangeHandler = e => setName(e.target.value);
  const displayNameChangeHandler = e => setDisplayName(e.target.value);
  const emailChangeHandler = e => setEmail(e.target.value);

  const infoSaveHandler = e => {
    console.log('HTTP PUT request w/ fetch')
  }

  return (
    <div className='profileInfo'>
      <input value={name}
             onChange={nameChangeHandler}
             placeholder='Name' />
      <input
        value={displayName}
        onChange={displayNameChangeHandler}
        placeholder='Display Name (Hive)'
      />
      <input value={email}
             onChange={emailChangeHandler}
             placeholder='Email' />
      <button onClick={infoSaveHandler}>Save</button>
    </div>
  );
};

export default ProfileInfo;

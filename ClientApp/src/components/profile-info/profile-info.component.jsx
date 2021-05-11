import React, { useState } from 'react';
import './profile-info.styles.scss';

const ProfileInfo = props => {
  const [name, setName] = useState(props.name);
  const [displayName, setDisplayName] = useState(props.displayName);
  const [email, setEmail] = useState(props.email);

  const nameChangeHandler = e => setName(e.target.value);
  const displayNameChangeHandler = e => setDisplayName(e.target.value);
  const emailChangeHandler = e => setEmail(e.target.value);

  const infoSaveHandler = e => {
    console.log('HTTP PUT request w/ fetch')
  }

  return (
    <div>
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

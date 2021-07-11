import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './profile-info.styles.scss';

const ProfileInfo = ({ user, profileChangeHandler }) => {
  // not sure if fetch call will be done in the card or if user info will be passed as props yet
  // for now, it's hardcoded
  const [name, setName] = useState(user.userName);
  const [displayName, setDisplayName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);

  const nameChangeHandler = e => setName(e.target.value);
  const displayNameChangeHandler = e => setDisplayName(e.target.value);
  const emailChangeHandler = e => setEmail(e.target.value);
  const infoSaveHandler = e => {
    console.log('HTTP PUT request w/ fetch');
  };
  console.log('USER: ', user);
  return (
    <div className='profileInfo'>
      <form className='profile-form'>
        {/* <FormInput
          value={'name'}
          label='Name'
          handleChange={nameChangeHandler}
        />
        <FormInput
          value={displayName}
          label='Display Name (Hive)'
          handleChange={displayNameChangeHandler}
        />
        <FormInput
          value={email}
          label='Email'
          handleChange={emailChangeHandler}
        /> */}


      <input value={name} onChange={nameChangeHandler} placeholder='Name' />
      <input
        value={displayName}
        onChange={displayNameChangeHandler}
        placeholder='Display Name (Hive)'
      />
      <input value={email} onChange={emailChangeHandler} placeholder='Email' />
        <div className='btnBox'>
          <CustomButton addStyles='addStyles' onClick={infoSaveHandler}>
            Save
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ProfileInfo;

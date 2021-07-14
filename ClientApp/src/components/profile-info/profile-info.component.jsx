import React, { useState, useContext } from 'react';
import { UserContext } from '../../components/user-context/user-context'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './profile-info.styles.scss';

const ProfileInfo = ({user, profileChangeHandler}) => {
  const userContext = useContext(UserContext);
  console.log('student name ', user.userName);
  console.log('student display name ', user.displayName);
  console.log('student email ', user.email);
  const [profilePic , setProfilePic] = useState(user.profilePic || null);
  const [name, setName] = useState(user.userName || '');
  const [displayName, setDisplayName] = useState(user.displayName || user.userName || '');
  //const [email, setEmail] = useState(user.email || '');

  const handleChooseFile = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setProfilePic(reader.result);
  }

  const infoSaveHandler = e => {
    console.log('HTTP PUT request w/ fetch');
  };
  console.log('USER: ', user);

  return (
    <div className='profileInfo'>
      <form className='profile-form'>
        {profilePic && <img src={profilePic}/>}
        <input
          className='upload'
          type='file'
          accept='image/png, image/jpeg'
          onChange={handleChooseFile}
          />
        <p>{user.email}</p>
        <FormInput
          value={name}
          label='Name'
          handleChange={e => setName(e.target.value)}
        />
        <FormInput
          value={displayName}
          label='Display Name'
          handleChange={e => setDisplayName(e.target.value)}
        />
        {/* <FormInput
          value={email}
          label='Email'
          placeholder='Email'
          handleChange={emailChangeHandler}
        /> */}
        <div className='btnBox'>
          <CustomButton onClick={infoSaveHandler}>
            Save
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default ProfileInfo;

import React, { useEffect, useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './profile-info.styles.scss';

const ProfileInfo = ({user, profileChangeHandler}) => {
  const [profilePic , setProfilePic] = useState('');
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    setProfilePic(user?.profilePicture || '');
    setName(user?.userName || '');
    setDisplayName(user?.displayName || user?.userName || '');
  }, [user])

  const handleChooseFile = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setProfilePic(reader.result);
  }

  const infoSaveHandler = e => {
    e.preventDefault();

    profileChangeHandler(profilePic, name, displayName);
  };

  

  return (
    <div className='profileInfo'>
      <form className='profile-form'>
        {profilePic && profilePic.length > 0 && <img src={profilePic}/>}
        <label className='uploadContainer'> Upload Profile Image
        
        <input
          className='upload'
          type='file'
          accept='image/png, image/jpeg'
          onChange={handleChooseFile}
          />
        </label>
        
        <p className='email'>{user?.email}</p>
        <label className='username'>User Name:
          <input
            className='name'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <label className='displayNameLabel'>Display Name:
          <input
            className='displayName'
            type='text'
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
          />
        </label>
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

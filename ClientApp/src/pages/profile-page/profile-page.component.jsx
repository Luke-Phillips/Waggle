import React, { useEffect } from 'react';
import CardSlot from '../../components/card-slot/card-slot.component';
import './profile-page.styles.scss';

const ProfilePage = props => {
  // const [user, setUser] 
  // useEffect(() => {
  //   fetch(`/api/user/${props.userId}`)
  //     .then(res => res.json())
  //     .then(response => {
  //       setUser(response);
  //     });
  // }, [props.userId]);

  return (
      <div className='profile-board'>
      <CardSlot defaultCard='profile'/>  {/* user(name, image, email)->classroomuser(display name) */}
      <CardSlot defaultCard='progress'/> {/* user (points, animation) */}
      <CardSlot defaultCard='stats'/>    {/* student:user->userclass->class->modules->posts->posts
                                                mod: classroom->modules->posts->posts
                        {/* hive manager /* classroom->classroomusers(name, display name)*/}
    </div>
  )
};

export default ProfilePage;

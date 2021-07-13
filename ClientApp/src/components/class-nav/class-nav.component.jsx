import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../user-context/user-context'
import ClassNavIcon from '../class-nav-icon/class-nav-icon.component';
import CustomButton from '../custom-button/custom-button.component'
import './class-nav.styles.scss';

const ClassNav = () => {
  const userContext = useContext(UserContext);
  const [classrooms, setClassrooms] = useState([]);
  const [hiveName, setHiveName] = useState('');

  useEffect(() => getHives(), [userContext.userId]);

  const getHives = () => {
    console.log('getting hives');
    console.log('jwt is ', userContext.token);
    fetch(`classrooms/${userContext.userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userContext.token
      }
    })
      .then(res => res.json())
      .then(classes => {
        console.log('classrooms ', classes);
        setClassrooms(classes);
      });
  }
  const handleAddHive = () => {
    const newClass = {
      ownerId: userContext.userId,
      name: hiveName
    };

    fetch('/classrooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newClass)
    });
    getHives();
  }

  const fakeClassrooms = [{name: 'apple'}, {name: 'blueberry'}];

  return (
    <div className='class-nav'>
      {fakeClassrooms.map(classroom => (
        <ClassNavIcon
          className='icon'
          key={classroom.name}
          classroom={classroom}
        />
      ))}
      <input
        type='text'
        value={hiveName}
        onChange={e => setHiveName(e.target.value)}
      />
      <CustomButton onClick={handleAddHive}>Add New Hive</CustomButton>
    </div>
  );
};

export default ClassNav;

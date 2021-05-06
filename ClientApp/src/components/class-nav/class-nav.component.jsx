import React, { useState, useEffect } from 'react';
import ClassNavIcon from '../class-nav-icon/class-nav-icon.component';
import './class-nav.styles.scss';

const ClassNav = props => {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    fetch(`/api/userclassrooms/${props.userId}`)
      .then(res => res.json())
      .then(response => {
        setClassrooms(response);
      });
  }, [props.userId]);
  //   const classrooms = fetch(`/api/userclassrooms/${props.userId}`).then((res) =>
  //     res.json());

  console.log(classrooms);
  console.log(props.userId);
  console.log('Hello world');
  return (
    <div className="class-nav">
    <p>just here for testing</p>
      {classrooms.map(classroom => (
        <ClassNavIcon
          className="icon"
          key={classroom.classroomID}
          classes={classroom}
        />
      ))}
    </div>
  );
};

export default ClassNav;

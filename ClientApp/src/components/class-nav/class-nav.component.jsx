import React from 'react';
import ClassNavIcon from '../class-nav-icon/class-nav-icon.component';
import './class-nav.styles.scss';

const ClassNav = props => {
  const classrooms = fetch(`/api/userclassrooms/${props.userId}`)
    .then(res => res.json());

  return (
    <div className="class-nav">
      <ClassNavIcon />
    </div>
  );
};

export default ClassNav;

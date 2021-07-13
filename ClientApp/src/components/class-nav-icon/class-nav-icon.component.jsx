import React from 'react';
import { ReactComponent as Icon } from '../../assets/honey-jar.svg';
import './class-nav-icon.styles.scss';

const ClassNavIcon = ({classroom}) => (
  <div className='class-nav-icon'>
    <Icon className='icon' />
    <img src="../../assets/honey-jar.svg" alt=""></img>
    <p>{classroom.name}</p>
  </div>
);

export default ClassNavIcon;

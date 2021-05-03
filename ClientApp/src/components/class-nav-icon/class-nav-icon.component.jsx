import React from 'react'
import { ReactComponent as Icon } from '../../assets/honey-jar.svg'
import './class-nav-icon.styles.scss'

const ClassNavIcon = () => (
    <div className='class-nav-icon'>
        <Icon className='icon'/>
        <img src='../../assets/honey-jar.svg' alt=''></img>
        <p>Science</p>
    </div>
);

export default ClassNavIcon;
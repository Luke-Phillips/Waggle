import React from "react";
import { ReactComponent as Icon } from "../../assets/honey-jar.svg";
import "./class-nav-icon.styles.scss";

const ClassNavIcon = (props) => (
    console.log('test: ', props.classes.classroom.name),
  <div className="class-nav-icon">
    <Icon className="icon" />
    <img src="../../assets/honey-jar.svg" alt=""></img>
    <p>{props.classes.classroom.name}</p>
  </div>
);


export default ClassNavIcon;

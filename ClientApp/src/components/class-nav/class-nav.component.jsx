import React, {useState, useEffect } from "react";
import ClassNavIcon from "../class-nav-icon/class-nav-icon.component";
import "./class-nav.styles.scss";

const ClassNav = (props) => {
  const[classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    fetch(`/api/userclassrooms/${props.userId}`).then((res) =>
    res.json()).then(response => { setClassrooms(response.items) })
  });
//   const classrooms = fetch(`/api/userclassrooms/${props.userId}`).then((res) =>
//     res.json());

  console.log(classrooms)
  return (
    <div className="class-nav">
      {classrooms.map((classroom) => (
        <ClassNavIcon key={classroom.classroomID} classroom={classroom} />
      ))}
    </div>
  );
};

export default ClassNav;

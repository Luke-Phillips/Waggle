import React, { useState, useEffect } from "react";
import ClassNavIcon from "../class-nav-icon/class-nav-icon.component";
import "./class-nav.styles.scss";

const ClassNav = (props) => {
  const [classrooms, setClassrooms] = useState([
    {
      userID: 6,
      classroomID: 1,
      role: "Student",
      displayName: "Luke",
      user: null,
      classroom: {
        classroomID: 1,
        name: "Senior Project B",
        inviteCode: "ZYXW9876",
        classroomUsers: [],
      },
    },
  ]);

  useEffect(() => {
    fetch(`/api/userclassrooms/${props.userId}`)
      .then((res) => res.json())
      .then((response) => {
        setClassrooms(response.items);
      });
  });
  //   const classrooms = fetch(`/api/userclassrooms/${props.userId}`).then((res) =>
  //     res.json());

  console.log(classrooms);
  console.log("Hello world");
  return (
    <div className="class-nav">
      {classrooms.map((classroom) => (
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

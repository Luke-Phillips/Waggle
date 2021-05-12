import React, { useState } from 'react';
import './student-table.styles.scss';

const StudentTable = props => {
  const [nameSortToggle, setNameSortToggle] = useState(1); // 1 = sort ascending
  const [roleSortToggle, setRoleSortToggle] = useState(-1); // 0 = sort ascending
  const [nameSortFirst, setNameSortFirst] = useState(true);

  const nameSortClickHandler = e => {
    setNameSortToggle(() => -+nameSortToggle);
    setNameSortFirst(false);
  };

  const roleSortClickHandler = e => {
    setRoleSortToggle(() => -+roleSortToggle);
    setNameSortFirst(true);
  };

  const nameComparer = isAscending => {
    return (student1, student2) => {
      if (student1.name > student2.name) return isAscending;
      if (student1.name < student2.name) return -+isAscending;
      return 0;
    };
  };

  const roleComparer = isAscending => {
    return (student1, student2) => {
      if (student1.role === student2.role) return 0;
      if (student1.role === 'moderator') return isAscending;
      return -+isAscending;
    };
  };

  const sortedStudents = nameSortFirst
    ? props.students
        .sort(nameComparer(nameSortToggle))
        .sort(roleComparer(roleSortToggle))
    : props.students
        .sort(roleComparer(roleSortToggle))
        .sort(nameComparer(nameSortToggle));

  console.log(
    'students: ' +
      sortedStudents[0].name +
      ' ' +
      sortedStudents[1].name +
      ' ' +
      sortedStudents[2].name
  );

  console.log('name toggle: ' + nameSortToggle);
  console.log('role toggle: ' + roleSortToggle);
  console.log('name sort first?: ' + nameSortFirst);

  const studentTableData = sortedStudents.map(student => (
    <tr key={student.email}>
      <td>Profile Image</td>
      <td>{student.name}</td>
      <td>{student.role}</td>
    </tr>
  ));

  const studentTable = (
    <table>
      <tbody>
        <tr>
          <th></th>
          <th>
            <button onClick={nameSortClickHandler}>Name</button>
          </th>
          <th>
            <button onClick={roleSortClickHandler}>Role</button>
          </th>
        </tr>
        {studentTableData}
      </tbody>
    </table>
  );

  return studentTable;
};

export default StudentTable;

import React, { useState } from 'react';
import './student-table.styles.scss';

const StudentTable = ({ students, enrollmentHandler, roleHandler }) => {
  // const [nameSortToggle, setNameSortToggle] = useState(1); // 1 = sort ascending
  // const [roleSortToggle, setRoleSortToggle] = useState(-1); // -1 = sort descending
  // const [nameSortFirst, setNameSortFirst] = useState(true);

  // const nameSortClickHandler = e => {
  //   setNameSortToggle(() => -+nameSortToggle);
  //   setNameSortFirst(false);
  // };

  // const roleSortClickHandler = e => {
  //   setRoleSortToggle(() => -+roleSortToggle);
  //   setNameSortFirst(true);
  // };

  // const nameCompareFn = isAscending => {
  //   return (student1, student2) => {
  //     if (student1.name > student2.name) return isAscending;
  //     if (student1.name < student2.name) return -+isAscending;
  //     return 0;
  //   };
  // };

  // const roleCompareFn = isAscending => {
  //   return (student1, student2) => {
  //     if (student1.role === student2.role) return 0;
  //     if (student1.role === 'moderator') return isAscending;
  //     return -+isAscending;
  //   };
  // };

  // const sortedStudents = nameSortFirst
  //   ? students
  //       .sort(nameCompareFn(nameSortToggle))
  //       .sort(roleCompareFn(roleSortToggle))
  //   : students
  //       .sort(roleCompareFn(roleSortToggle))
  //       .sort(nameCompareFn(nameSortToggle));

  // prolly better as a helper
  const enrollmentStatus = {
    pending: 0,
    enrolled: 1,
    unenrolled: 2
  }

  const studentTableData = students.map(student => (
    <tr key={student.userId}>
      <td>{student.userName}</td>
      <td>{student.displayName}</td>
      <td>
        {student.enrollmentStatus === enrollmentStatus.pending &&
          <>
            <span>pending</span>
            <button
              onClick={enrollmentHandler({
                  userId: student.userId,
                  newStatus: enrollmentStatus.enrolled
              })}>
              +
            </button>
          </>
        }
        {student.enrollmentStatus === enrollmentStatus.enrolled &&
          <>
            <span>enrolled</span>
            <button
              onClick={enrollmentHandler({
                  userId: student.userId,
                  newStatus: enrollmentStatus.unenrolled
              })}>
              -
            </button>
          </>
        }
        {student.enrollmentStatus === enrollmentStatus.unenrolled &&
          <span>unenrolled</span>
        }
      </td>
      <td>
        {student.isModerator ?
          <>
            <span>moderator</span>
            <button
              onClick={roleHandler({
                  userId: student.userId,
                  newRole: 'student'
              })}>
              ⬇️
            </button>
          </> :
          <>
            <span>student</span>
            <button
              onClick={roleHandler({
                  userId: student.userId,
                  newRole: 'moderator'
              })}>
                ⬆️
            </button>
          </>
        }
      </td>
    </tr>
  ));

  const studentTable = (
    <table className='studentTable'>
      <tbody>
        <tr>
          <th>Username</th>
          <th>Display Name</th>
          <th>Enrollment Status</th>
          <th>Role</th>
          {/* <th></th>
          <th>
            <button onClick={nameSortClickHandler}>Name</button>
          </th>
          <th>
            <button onClick={roleSortClickHandler}>Role</button>
          </th> */}
        </tr>
        {studentTableData}
      </tbody>
    </table>
  );

  return studentTable;
};

export default StudentTable;

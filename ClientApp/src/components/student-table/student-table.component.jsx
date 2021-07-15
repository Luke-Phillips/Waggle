import React, { useState, useContext } from 'react';
import { UserContext } from '../../components/user-context/user-context';
import CustomButton from '../custom-button/custom-button.component';
import './student-table.styles.scss';

const StudentTable = ({ students, enrollmentHandler, roleHandler }) => {
  const userContext = useContext(UserContext);
  
  // prolly better as a helper (used in class nav icon)
  const enrollmentStatus = {
    pending: 0,
    enrolled: 1,
    unenrolled: 2,
  };

  const studentTableData = students.map(student => (
    <tr key={student.userId}>
      <td>{student.userName}</td>
      <td>{student.displayName}</td>
      {student.enrollmentStatus === enrollmentStatus.pending && (
        <>
          <td>
            <p>pending</p>
          </td>
          {userContext.isModerator &&
          <td className='tableBtn'>
            <CustomButton
              className='enrollBtn'
              onClick={enrollmentHandler({
                userId: student.userId,
                newStatus: enrollmentStatus.enrolled,
              })}
            >
              +
            </CustomButton>
          </td>
          }
        </>
      )}
      {student.enrollmentStatus === enrollmentStatus.enrolled && (
        <>
          <td>
            <p>enrolled</p>
          </td>
          {userContext.isModerator &&
            <td className='tableBtn'>
              <CustomButton
                className='enrollBtn'
                onClick={enrollmentHandler({
                  userId: student.userId,
                  newStatus: enrollmentStatus.unenrolled,
                })}
              >
                -
              </CustomButton>
            </td>
          }
        </>
      )}
      {student.enrollmentStatus === enrollmentStatus.unenrolled && (
        <td colspan={2}>
          <p>unenrolled</p>
        </td>
      )}
      {student.isModerator ? (
        <>
          <td>
            <p>moderator</p>
          </td>
          {userContext.isModerator &&
            <td className='tableBtn'>
              <CustomButton
                className='roleBtn'
                onClick={roleHandler({
                  userId: student.userId,
                  newRole: 'student',
                })}
              >
                ⬇️
              </CustomButton>
            </td>
          }
        </>
      ) : (
        <>
          <td>
            <p>student</p>
          </td>
          {userContext.isModerator &&
            <td className='tableBtn'>
              <CustomButton
                className='roleBtn'
                onClick={roleHandler({
                  userId: student.userId,
                  newRole: 'moderator',
                })}
              >
                ⬆️
              </CustomButton>
            </td>
          }
        </>
      )}
    </tr>
  ));

  const studentTable = (
    <div className='tableContainer'>
      <table className='studentTable'>
        <thead>
          <tr>
          <th>Username</th>
          <th>Display Name</th>
          <th colSpan={userContext.isModerator ? 2 : 1}>Enrollment Status</th>
          <th colSpan={userContext.isModerator ? 2 : 1}>Role</th>
          </tr>
        </thead>
        <tbody>
          
          {/* <th></th>
          <th>
            <button onClick={nameSortClickHandler}>Name</button>
          </th>
          <th>
            <button onClick={roleSortClickHandler}>Role</button>
          </th> */}

          {studentTableData}
        </tbody>
      </table>
    </div>
  );

  return studentTable;
};

export default StudentTable;

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
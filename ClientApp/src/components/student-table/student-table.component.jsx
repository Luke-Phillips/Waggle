import React, { useContext } from 'react';
import { UserContext } from '../../components/user-context/user-context';
import { ReactComponent as DownArrow } from '../../assets/down-arrow.svg';
import { ReactComponent as UpArrow } from '../../assets/up-arrow.svg'
import CustomButton from '../custom-button/custom-button.component';
import './student-table.styles.scss';

const StudentTable = ({ isMod, students, enrollmentHandler, roleHandler }) => {
  const userContext = useContext(UserContext);

  // prolly better as a helper (used in class nav icon)
  const enrollmentStatus = {
    pending: 0,
    enrolled: 1,
    unenrolled: 2,
  };

  const iconStyles = {
    width: '35px',
    height: '35px'
  }

  const studentTableData = students.map(student => (
    <tr key={student.userId}>
      <td>{student.userName}</td>
      <td>{student.displayName}</td>
      {student.enrollmentStatus === enrollmentStatus.pending && (
        <>
          <td colSpan={2}>
            <p>pending</p>
          </td>
          {isMod &&
          <td className='tableBtn'
            
              
              onClick={enrollmentHandler({
                userId: student.userId,
                newStatus: enrollmentStatus.enrolled,
              })}
            >
              +
            
          </td>
          }
        </>
      )}
      {student.enrollmentStatus === enrollmentStatus.enrolled && (
        <>
          <td colSpan={2}>
            <p>enrolled</p>
          </td>
          {(isMod || student.userId === userContext.userId) &&
            <td className='tableBtn'
                
                onClick={enrollmentHandler({
                  userId: student.userId,
                  newStatus: enrollmentStatus.unenrolled,
                })}
              >
                -
              
            </td>
          }
        </>
      )}
      {student.enrollmentStatus === enrollmentStatus.unenrolled && (
        <td>
          <p>unenrolled</p>
        </td>
      )}
      {student.isModerator ? (
        <>
          <td>
            <p>moderator</p>
          </td>
          {isMod &&
            <td className='tableBtn'
              
                //className='roleBtn'
                onClick={roleHandler({
                  userId: student.userId,
                  newRole: 'student',
                })}
              >
                {/* ⬇️ */}
                <DownArrow style={{width: 30 , height: 30}}/>
              
            </td>
          }
        </>
      ) : (
        <>
          <td>
            <p>student</p>
          </td>
          {isMod &&
            <td className='tableBtn'
              
                //className='roleBtn'
                onClick={roleHandler({
                  userId: student.userId,
                  newRole: 'moderator',
                })}
              >
                {/* ⬆️ */}
                <UpArrow style={{width: 30 , height: 30}}/>
              
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
          <th colSpan={2}>Enrollment Status</th>
          <th colSpan={2}>Role</th>
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
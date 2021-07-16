import React from 'react';
import StudentTable from '../student-table/student-table.component';
import './hive-manager.styles.scss';

const HiveManager = ({isMod, inviteCode, students, enrollmentHandler, roleHandler}) => (
    <div className='hiveManager'>
      <StudentTable
        isMod={isMod}
        students={students}
        enrollmentHandler = {enrollmentHandler}
        roleHandler = {roleHandler}
      />
      <div className='inviteCodeContainer'>
        {isMod &&
          <>
            <h4 className='inviteCodeHeader'>Class Invite Code: </h4> 
            <h5 className='inviteCode'>{inviteCode}</h5>
          </>
        }
      </div>
    </div>
  );

export default HiveManager;

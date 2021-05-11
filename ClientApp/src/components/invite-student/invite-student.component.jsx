import React from 'react';
import './invite-student.styles.scss';

const InviteStudent = () => (
  <form>
    <label>
      Invite Student
      <input type='text' placeHolder="student's email" />
    </label>
    <input type='submit' />
  </form>
);

export default InviteStudent;

import React from 'react';
import './invite-student.styles.scss';

const InviteStudent = props => (
  <>
    <p>Invite Code: {props.inviteCode}</p>
    <form>
      <label>
        Invite Student
        <input type='text' placeholder="student's email" />
      </label>
      <input type='submit' value='Invite' />
    </form>
  </>
);

export default InviteStudent;

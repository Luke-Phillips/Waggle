import React from 'react';
import './card-picker.styles.scss';

const CardPicker = props => (
    <select onChange={props.pickHandler}>
      <option value='' selected>--Choose Card--</option>
      <option value='profile'>Profile</option>
      <option value='progress'>Progress</option>
      {/*<option value='stats-personal'>Personal Stats</option>
    <option value='stats-hive'>Hive Stats</option>
    <option value='hive-manager'>Hive Manager</option>*/}
    </select>
  );

export default CardPicker;

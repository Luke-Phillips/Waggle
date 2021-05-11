import React from 'react';
import './card-picker.styles.scss';

const CardPicker = props => (
  <select onChange={props.pickHandler}>
    <option value='' selected>
      --Choose Card--
    </option>
    <option value='profile'>Profile</option>
    <option value='progress'>Progress</option>
    <option value='stats'>Stats</option>
    <option value='hiveManager'>Hive Manager</option>
  </select>
);

export default CardPicker;

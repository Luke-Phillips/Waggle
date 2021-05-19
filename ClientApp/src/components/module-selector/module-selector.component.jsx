import React, {useState} from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './module-selector.styles.scss';

function toggleDropdown() {}

const ModuleSelector = props => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className='module-selector'>
      <CustomButton
        className='dropdown'
        onClick={() => setShowDropdown(!showDropdown)}
      >Modules</CustomButton>
      <div className='dropdown-content'>
        {showDropdown &&
          props.items.map(prop => <span className='dropdown-item'>{prop}</span>)}
      </div>
    </div>
  );
};

export default ModuleSelector;

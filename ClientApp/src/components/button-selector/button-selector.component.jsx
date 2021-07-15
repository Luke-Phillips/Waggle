import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './button-selector.styles.scss';

const ButtonSelector = ({ clickFuncs = [], handleShowNewPost = () => {}, ...props }) => {
  return (
    <>
      {props.labels.map((label, index) => {
        const clickFunc = clickFuncs[index];
        return (
          <CustomButton
          key={index}
          className='button'
          showbtn={props.showbtn}
          onClick={() => {
            clickFunc();
            handleShowNewPost(true);
          }}
        >
          {label}
        </CustomButton>)
      })}
    </>
  );
};

export default ButtonSelector;

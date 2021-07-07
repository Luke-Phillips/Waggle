import React, { useState } from 'react';
import UseState from 'react';
import './filter-posts.styles.scss';

const FilterPosts = props => {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheck = e => {
    const value = e.target.value
    const isInCheckedValues = checkedValues.includes(value)
    const isChecked = e.target.checked

    if(isChecked === false && isInCheckedValues) {
      
      const arr = checkedValues.filter(checkedItem => checkedItem !== value)
      setCheckedValues(arr)
    }

    if (isChecked) {  
      console.log(value, 'added')
      setCheckedValues(checkedValues =>[...checkedValues, value])
    }

    props.setPostTypes(checkedValues);

  };
  return (
    <>
      <form className='filter'>
        <h3>Filter Posts: </h3>
        <label>
          <input
            type='checkbox'
            name='announcements'
            value='announcement'
            onChange={handleCheck}
          ></input>
          Announcements
        </label>

        <label>
          <input
            type='checkbox'
            value='question'
            onChange={handleCheck}
          ></input>
          Questions
        </label>

        <label>
          <input
            type='checkbox'
            value='insight'
            onChange={handleCheck}
          ></input>
          Insights
        </label>

        <label>
          <input
            type='checkbox'
            value='fbrequest'
            onChange={handleCheck}
          ></input>
          Feedback Requests
        </label>

        <label>
          <input
            type='checkbox'
            value='comment'
            onChange={handleCheck}
          ></input>
          Comments
        </label>
      </form>
      {console.log('Checked but Later', checkedValues)}
    </>
  );
};

export default FilterPosts;

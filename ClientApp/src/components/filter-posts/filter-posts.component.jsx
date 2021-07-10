import React, { useState } from 'react';
import UseState from 'react';
import './filter-posts.styles.scss';

const FilterPosts = ({handleCheckFilter}) => (
  <>
    <form className='filter'>
      <h3>Filter Posts: </h3>
      <label>
        <input
          type='checkbox'
          name='announcements'
          value='announcement'
          onChange={handleCheckFilter}
        ></input>
        Announcements
      </label>

      <label>
        <input
          type='checkbox'
          value='question'
          onChange={handleCheckFilter}
        ></input>
        Questions
      </label>

      <label>
        <input
          type='checkbox'
          value='insight'
          onChange={handleCheckFilter}
        ></input>
        Insights
      </label>

      <label>
        <input
          type='checkbox'
          value='fbrequest'
          onChange={handleCheckFilter}
        ></input>
        Feedback Requests
      </label>

      <label>
        <input
          type='checkbox'
          value='comment'
          onChange={handleCheckFilter}
        ></input>
        Comments
      </label>
    </form>
  </>
)

export default FilterPosts;

import React from 'react';

import './filter-posts.styles.scss';

const FilterPosts = () => (
  // Attempting a fragment
  <>
    <form className='filter'>
      <h3>Filter Posts: </h3>
      <label>
        <input
          type='checkbox'
          name='announcements'
          value='announcements'
        ></input>
        Announcements
      </label>

      <label>
        <input type='checkbox' value='questions'></input>Questions
      </label>

      <label>
        <input type='checkbox' value='insights'></input>Insights
      </label>

      <label>
        <input type='checkbox' value='feedback-requests'></input>Feedback
        Requests
      </label>

      <label>
        <input type='checkbox' value='comments'></input>Comments
      </label>
    </form>
  </>
  // NEED to add ON CHECk
);

export default FilterPosts;
// announcments
// questions
// insights
// comments
// feedback-requests

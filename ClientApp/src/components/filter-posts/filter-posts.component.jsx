import React from 'react'

import './filter-posts.styles.scss'

const FilterPosts = () => (
  // Attempting a fragment
  <> 
  
  <form className='filter'>
    <h3>Filter Posts: </h3> 
    <input type='checkbox' id='announcements' value='announcements'></input>
    <label for='announcements'>Announcements</label>  

    <input type='checkbox' id='questions' value='questions'></input>
    <label for='questions'>Questions</label>

    <input type='checkbox' id='insights' value='insights'></input>
    <label for='insights'>Insights</label>

    <input type='checkbox' id='feedback-requests' value='feedback-requests'></input>
    <label for='feedback-requests'>Feedback Requests</label>

    <input type='checkbox' id='comments' value='comments'></input>
    <label for='comments'>Comments</label>
    
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
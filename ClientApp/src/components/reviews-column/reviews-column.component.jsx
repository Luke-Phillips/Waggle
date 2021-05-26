import React from 'react';

import './reviews-column.styles.scss';

const ReviewsColumn = props => {
  if (!props.show) {
    return null;
  }

  return (
    <div className='reviews-column'>
      <h1>{props.content}</h1>
    </div>
  );
};

export default ReviewsColumn;

import React from 'react';

import './reviews-column.styles.scss';

const ReviewsColumn = props => {
  if (!props.show) {
    return null;
  }

  return (
    <>
      <h1>{props.content}</h1>
    </>
  );
};

export default ReviewsColumn;

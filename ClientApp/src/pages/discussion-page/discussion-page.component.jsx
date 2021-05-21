import React, { useState, useEffect } from 'react';
import FilterPost from '../../components/filter-posts/filter-posts.component';
import SortPosts from '../../components/sort-posts/sort-posts.component';
import CreatePost from '../../components/create-post/create-post.component';
import DiscussionPost from '../../components/discussion-post/discussion-post.component';
import DiscussionFeedItem from '../../components/discussion-feed-item/discussion-feed-item.component';
import ModuleSelector from '../../components/module-selector/module-selector.component';
import ReviewsColumn from '../../components/reviews-column/reviews-column.component';

import './discussion-page.styles.scss';

const postDate = new Date().getTime();

const modules = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
const DiscussionPage = () => {
  const [showReviews, setShowReviews] = useState(false);

  const toggleShowReviews = e => {
    setShowReviews(!showReviews);
  };

  const showColumn = show => {
    if(show) {
      return 'visible'
    };
    return 'hidden';
  };

  return (
    <div className='discussion-page'>
      {/* <h1> Get ready to share </h1> */}
      <div className='discussion-board'>
        <div className='options'>
          <ModuleSelector items={modules} />
          <FilterPost />
          <CreatePost />
        </div>

        <div className='post-feed'>
          <SortPosts />
          <DiscussionPost />
          <DiscussionFeedItem btnName='Answer' onClick={toggleShowReviews}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DiscussionFeedItem>
          <DiscussionFeedItem btnName='Answer' onClick={toggleShowReviews}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DiscussionFeedItem>
        </div>

        <div className={showColumn(showReviews)}>
          <ReviewsColumn show={showReviews} content='I am a Column' />
        </div>
        
      </div>
    </div>
  );
};

export default DiscussionPage;


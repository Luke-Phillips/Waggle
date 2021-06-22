import React, { useState, useEffect } from 'react';
import FilterPost from '../../components/filter-posts/filter-posts.component';
import SortPosts from '../../components/sort-posts/sort-posts.component';
import CreatePost from '../../components/create-post/create-post.component';
import DiscussionPost from '../../components/discussion-post/discussion-post.component';
import DiscussionFeedItem from '../../components/discussion-feed-item/discussion-feed-item.component';
import ModuleSelector from '../../components/module-selector/module-selector.component';
import RepliesColumn from '../../components/replies-column/replies-column.component'
import CustomButton from '../../components/custom-button/custom-button.component';

import './discussion-page.styles.scss';

const data = {
  posts: [
    {
      user: 'Cade',
      text: "Hello I'm a student and I would like to be heard",
      btnName: 'comment',
      postType: 'insight',
    },
    {
      user: 'Luke',
      text: 'I am here to Announce I am the avatar!!',
      btnName: 'comment',
      postType: 'comment',
    },
    {
      user: 'Michael',
      text: 'That question is very silly ask another',
      btnName: 'comment',
      postType: 'answer',
    },
    {
      user: 'Brooklynn',
      text: 'You seem very intelligent, this was very well written. Good job',
      btnName: 'comment',
      postType: 'feedback',
    },
  ],
};

const modules = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

const DiscussionPage = () => {
  const [showReviews, setShowReviews] = useState(false);
  const [postInfo, setPostInfo] = useState({});

  const [id, setId] = useState(0);

  const [postWidth, setPostWidth] = useState('normal')

  const toggleShowReviews = (id, e) => {

    setShowReviews(!showReviews);

  }

  const handlePostWidth = () => {
    if(postWidth === 'normal') {
      setPostWidth('wide')
    }
    else {
      setPostWidth('normal')
    }
    
  }

  const announcement = () => {
    setPostInfo({
      postType: 'announcement',
    });
  };

  const question = () => {
    setPostInfo({
      postType: 'question',
    });
  };

  const insight = () => {
    setPostInfo({
      postType: 'insight',
    });
  };

  const feedback = () => {
    setPostInfo({
      postType: 'feedback',
    });
  };

  const postTypes = [announcement, question, insight, feedback];

  console.log('Discussion Pg');
  return (
    <div className='discussion-page'>
      {/* <h1> Get ready to share </h1> */}
      <div className='discussion-board'>
        <div className='options'>
          <ModuleSelector items={modules} />
          <FilterPost />
          <CreatePost postTypes={postTypes} />
        </div>

        <div className='post-feed'>
          <SortPosts />
          <DiscussionPost user='placeholder' type={postInfo.postType} postWidth={postWidth}/>

          <DiscussionFeedItem btnName='Answer' onClick={() => {toggleShowReviews(); handlePostWidth()}} postWidth={postWidth}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DiscussionFeedItem>
          <DiscussionFeedItem btnName='Answer' onClick={() => {toggleShowReviews(); handlePostWidth()}} postWidth={postWidth}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </DiscussionFeedItem>
          
        </div>
        
          <RepliesColumn className='visible'
            show={showReviews}
            data={data}
            onClick={toggleShowReviews}
            postWidth={postWidth}
          />
        
      </div>
    </div>
  );
};

export default DiscussionPage;
//TODO: create function to take a post type and output a button label
// question --> answer
// answer --> comment
// comment --> comment
// insight --> comment
// feedbackReq --> response?? (essentially a comment)

// TODO:  Create rating component

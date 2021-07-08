import React, { useState, useEffect } from 'react';
import FilterPost from '../../components/filter-posts/filter-posts.component';
import SortPosts from '../../components/sort-posts/sort-posts.component';
import CreatePost from '../../components/create-post/create-post.component';
import DiscussionFeed from '../../components/discussion-feed/discussion-feed.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import './discussion-page.styles.scss';

const modules = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

const feedData = [];
const data = {
  posts: [
    {
      user: 'Cade',
      text: "Hello I'm a student and I would like to be heard",
      postType: 'insight',
      isReply: true,
    },
    {
      user: 'Luke',
      text: 'I am here to Announce I am the avatar!!',
      postType: 'comment',
      isReply: true,
    },
    {
      user: 'Michael',
      text: 'That question is very silly ask another',
      postType: 'answer',
      isReply: true,
    },
    {
      user: 'Brooklynn',
      text: 'You seem very intelligent, this was very well written. Good job',
      postType: 'fbrequest',
      isReply: true,
    },
  ],
};
const DiscussionPage = () => {

  const [postInfo, setPostInfo] = useState({});

  const [id, setId] = useState(0);

  const [sortBy, setSortBy] = useState('')
  
  const [showPostType, setShowPostType] = useState([]);

  const showPosts = postTypes => {
    setShowPostType(postTypes);
  };

  const handleSortBy = sortOrder => {
    setSortBy(sortOrder);
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

  console.log('Discussion Pg Stuff:');

  return (
    <div className='discussion-page'>
      <div className='discussion-board'>
        <div className='options'>
          <FilterPost setPostTypes={showPosts} />
          <CreatePost postTypes={postTypes} showbtn={true}/>
        </div>

        <div className='post-feed'>
          
          <SortPosts setSortByValue={handleSortBy} showbtn={true}/>
          
          <DiscussionFeed
            shownPostTypes={showPostType}
            sortPostsBy={sortBy}
            discussionPostType={postInfo.postType}
            showbtn={true}

          />
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;

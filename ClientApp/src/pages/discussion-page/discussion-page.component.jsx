import React, { useState, useEffect } from 'react';
import FilterPost from '../../components/filter-posts/filter-posts.component';
import SortPosts from '../../components/sort-posts/sort-posts.component';
import CreatePost from '../../components/create-post/create-post.component';
import DiscussionPost from '../../components/discussion-post/discussion-post.component';
import DiscussionFeed from '../../components/discussion-feed/discussion-feed.component';
import DiscussionFeedItem from '../../components/discussion-feed-item/discussion-feed-item.component';
import ModuleSelector from '../../components/module-selector/module-selector.component';
import RepliesColumn from '../../components/replies-column/replies-column.component';
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
  const [showReplies, setShowReplies] = useState(false);
  const [postInfo, setPostInfo] = useState({});

  const [id, setId] = useState(0);

  const [postWidth, setPostWidth] = useState('normal');

  const [showPostType, setShowPostType] = useState([]);

  const [discussionFeedPosts, setDiscussionFeedPosts] = useState([]);

  const showPosts = postTypes => {
    setShowPostType(postTypes);
  };

  const toggleShowReplies = (id, e) => {
    setShowReplies(!showReplies);
  };

  const handlePostWidth = () => {
    if (postWidth === 'normal') {
      setPostWidth('wide');
    } else {
      setPostWidth('normal');
    }
  };

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
  const checker = () => {
    console.log('SHOW POST TYPE:', showPostType);
  };
  return (
    <div className='discussion-page'>
      {/* <h1> Get ready to share </h1> */}
      <div className='discussion-board'>
        <div className='options'>
          <FilterPost setPostTypes={showPosts} />
          <CreatePost postTypes={postTypes} />
        </div>

        <div className='post-feed'>
          
          <SortPosts />
          <DiscussionPost
            user='placeholder'
            type={postInfo.postType}
            postWidth={postWidth}
          />

          {/* 
            I think I will need a HOC for conditional rendering of post types 
            Then the fetch can happen there 
            Will need to pass handlePostWidth and toggleShowReivews

          */}
          <DiscussionFeed
            shownPostTypes={showPostType}
            postWidth={postWidth}
            onClick={() => {
              toggleShowReplies();
              handlePostWidth();
            }}
            showReplies={showReplies}

          />

          {/* <DiscussionFeedItem
            type='feedback'
            onClick={() => {
              toggleShowReviews();
              handlePostWidth();
            }}
            postWidth={postWidth}
          > */}
        </div>

        {/* <RepliesColumn
          className='visible'
          show={showReplies}
          data={data}
          onClick={toggleShowReplies}
          postWidth={postWidth}
        /> */}
      </div>
    </div>
  );
};

export default DiscussionPage;

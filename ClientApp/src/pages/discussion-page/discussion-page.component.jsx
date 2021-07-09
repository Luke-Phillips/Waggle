import React, { useContext, useEffect, useState } from 'react';
import FilterPost from '../../components/filter-posts/filter-posts.component';
import SortPosts from '../../components/sort-posts/sort-posts.component';
import CreatePost from '../../components/create-post/create-post.component';
import DiscussionFeed from '../../components/discussion-feed/discussion-feed.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { UserAndClassIds } from '../../components/user-and-class-context/user-and-class-context'

import './discussion-page.styles.scss';

const modules = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

const DiscussionPage = () => {
  
  const contextCheck = useContext(UserAndClassIds)

  const [postInfo, setPostInfo] = useState({});

  const [sortBy, setSortBy] = useState('newest')
  const [sortByTimeAscending, setSortByTimeAscending] = useState(false) // newest posts
  const [sortByPopularityAscending, setSortByPopularityAscending] = useState(true) // least replies
  
  const [showPostType, setShowPostType] = useState([]);

  const showPosts = postTypes => {
    setShowPostType(postTypes);
  };

  const handleSortBy = sortBy => {
    setSortBy(sortBy);
    if (sortBy === 'newest' || sortBy === 'oldest')
    {
      setSortByTimeAscending(sortBy === 'oldest')
    }
    else 
    {
      setSortByPopularityAscending(sortBy === 'least')
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
            timeAscending={sortByTimeAscending}
            popularityAscending={sortByPopularityAscending}
            discussionPostType={postInfo.postType}
            showbtn={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscussionPage;

import React, { useContext, useState } from 'react';
import FilterPost from '../../components/filter-posts/filter-posts.component';
import SortPosts from '../../components/sort-posts/sort-posts.component';
import CreatePost from '../../components/create-post/create-post.component';
import DiscussionFeed from '../../components/discussion-feed/discussion-feed.component';
import { UserContext } from '../../components/user-context/user-context'

import './discussion-page.styles.scss';

const modules = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];

const DiscussionPage = () => {
  
  const userContext = useContext(UserContext);

  const [postInfo, setPostInfo] = useState({});

  const [sortBy, setSortBy] = useState('newest')
  const [sortByTimeAscending, setSortByTimeAscending] = useState(false) // newest posts
  const [sortByPopularityAscending, setSortByPopularityAscending] = useState(true) // least replies
  
  const [filteredPostTypes, setFilteredPostTypes] = useState([]);

  const handleFilterPostTypes = e => {
    const postType = e.target.value;
    const isFiltered = e.target.checked;

    const newFilteredPostTypes = isFiltered ?
      [postType, ...filteredPostTypes] :
      filteredPostTypes.filter(pt => pt !== postType);
    setFilteredPostTypes(newFilteredPostTypes);
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
    userContext.classroomId ?
    <div className='discussion-page'>
      <div className='discussion-board'>
        <div className='options'>
          <FilterPost handleCheckFilter={handleFilterPostTypes} />
          <CreatePost postTypes={postTypes} showbtn={true}/>
        </div>
        <div className='post-feed'>
          <SortPosts setSortByValue={handleSortBy} showbtn={true}/>
          <DiscussionFeed
            filteredPostTypes={filteredPostTypes}
            sortPostsBy={sortBy}
            timeAscending={sortByTimeAscending}
            popularityAscending={sortByPopularityAscending}
            discussionPostType={postInfo.postType}
            showbtn={true}
          />
        </div>
      </div>
    </div>
    :
    <p>Create or join a class before contributing to a discussion</p>
  );
};

export default DiscussionPage;

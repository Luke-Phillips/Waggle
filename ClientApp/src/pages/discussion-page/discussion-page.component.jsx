import React from 'react';
import Question from '../../components/question/question.component';
import FilterPost from '../../components/filter-posts/filter-posts.component';
import SortPosts from '../../components/sort-posts/sort-posts.component';
import CreatePost from '../../components/create-post/create-post.component';
import DiscussionPost from '../../components/discussion-post/discussion-post.component';
import DiscussionFeedItem from '../../components/discussion-feed-item/discussion-feed-item.component';

// import ClassNav from "../../components/class-nav/class-nav.component";
import './discussion-page.styles.scss';
const postDate = new Date().getTime();
const DiscussionPage = () => (
  <div className='discussion-page'>
    {/* <div className='nav'>
      <ClassNav userId={6} />
    </div> */}
    <h1> Get ready to share </h1>
    <div className='discussion-board'>
      {/* <Question /> */}

      <div className='options'>
        <FilterPost />
        <CreatePost />
      </div>

      <div className='post-feed'>
        <SortPosts />
        <DiscussionPost />
        <DiscussionFeedItem btnName='Answer'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </DiscussionFeedItem>
      </div>
    </div>
  </div>
);

export default DiscussionPage;
// create post
// post feed
// filter :DONE
// sort :DONE
// class module

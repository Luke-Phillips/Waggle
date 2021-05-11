import React from 'react';
import Question from '../../components/question/question.component';
import FilterPost from '../../components/filter-posts/filter-posts.component';
import SortPosts from '../../components/sort-posts/sort-posts.component';
import CreatePost from '../../components/create-post/create-post.component';

// import ClassNav from "../../components/class-nav/class-nav.component";
import './discussion-page.styles.scss';

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

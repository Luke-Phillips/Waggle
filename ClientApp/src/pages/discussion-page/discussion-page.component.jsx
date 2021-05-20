import React from 'react';
import FilterPost from '../../components/filter-posts/filter-posts.component';
import SortPosts from '../../components/sort-posts/sort-posts.component';
import CreatePost from '../../components/create-post/create-post.component';
import DiscussionPost from '../../components/discussion-post/discussion-post.component';
import DiscussionFeedItem from '../../components/discussion-feed-item/discussion-feed-item.component';
import ModuleSelector from '../../components/module-selector/module-selector.component';
// import Slider from '../../components/slider/slider.component';
// import ClassNav from "../../components/class-nav/class-nav.component";
import './discussion-page.styles.scss';

function createRightCol() {
  console.log('Function fired');
  return (
    <div className='right-col'>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

const postDate = new Date().getTime();

const modules = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
const DiscussionPage = () => (
  <div className='discussion-page'>
    {/* <div className='nav'>
      <ClassNav userId={6} />
    </div> */}
    <h1> Get ready to share </h1>
    <div className='discussion-board'>
      {/* <Question /> */}

      <div className='options'>
        <ModuleSelector items={modules} />
        <FilterPost />
        <CreatePost />
      </div>

      <div className='post-feed'>
        <SortPosts />
        <DiscussionPost />
        <DiscussionFeedItem btnName='Answer' onClick={createRightCol}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </DiscussionFeedItem>
      </div>

      {/* <div className='temp'>
        <Slider label='Accuracy' />
      </div> */}
    </div>
  </div>
);

export default DiscussionPage;
// create post
// post feed
// filter :DONE
// sort :DONE
// class module

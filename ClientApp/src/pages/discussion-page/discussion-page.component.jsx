import React from "react";
import Question from "../../components/question/question.component";
// import ClassNav from "../../components/class-nav/class-nav.component";
import "./discussion-page.styles.scss";

const DiscussionPage = () => (
  <div className='discussion-page'>
    {/* <div className='nav'>
      <ClassNav userId={6} />
    </div> */}
    <div className='discussion-board'>
      <h1> Get ready to share </h1>
      <Question />
    </div>
  </div>
);

export default DiscussionPage;

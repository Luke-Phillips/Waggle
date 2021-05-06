import React from "react";
import Question from "../../components/question/question.component";
// import ClassNav from "../../components/class-nav/class-nav.component";
import "./discussion-page.styles.scss";

const DiscussionPage = () => (
  // We are going to have to add state or something dealing with the login 
  // so we can get the proper userId...
  <div className='discussion-page'>
<<<<<<< HEAD
    <div className='nav'>
      <ClassNav userId='6' />
    </div>
=======
    {/* <div className='nav'>
      <ClassNav userId={6} />
    </div> */}
>>>>>>> c4189b1efc5ee3498280b6bead2be6999e0cc188
    <div className='discussion-board'>
      <h1> Get ready to share </h1>
      <Question />
    </div>
  </div>
);

export default DiscussionPage;

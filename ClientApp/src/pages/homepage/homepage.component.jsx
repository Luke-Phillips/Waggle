import React from 'react';
import Hexagon from '../../assets/pngegg.png';
import './homepage.styles.scss';



const HomePage = () => (
    <div className='bgColor'>
    <div className='homepage bgImage'>
    <div className='textContent'>
    <div className='banner'>Welcome to Waggle!</div>
      <div className='overview'>
        <h3>Overview</h3>
        <p>
          Waggle is a peer tutoring platform for teachers and students that
          promotes an environment of peer collaboration. Waggle seeks to
          generate in learners a genuine interest to help their peers learn and
          grow. This method, backed by research, leverages the benefits of peer
          tutoring to increase the education of students and decrease the
          workload of the teacher so they can focus their efforts where it
          matters most.
        </p>
        <p>
          The Waggle app centers around a discussion page where our users, known
          as Wagglers, can share insights, ask and answer each other's
          questions, and request and give feedback on their course assignments.
          By teaching each other, student Wagglers reinforce their own learning
          and identify gaps in their understanding. Additionally, the ability
          for student Wagglers to share their insights and answers means their
          peers get to be taught from the perspective of another learner,
          helping to bridge the gaps often left by professional educators who
          don't remember what it's like to not know the material they're
          teaching.
        </p>
      </div>

      <div className='whyWaggle'>
        <h3>Why Choose Waggle?</h3>
        <p>
          Other platforms offer similar solutions to Waggle but focus
          exclusively on peer feedback. Waggle places a stronger emphasis on
          peer tutoring in general. Whether you're a student or a teacher, sign
          up and bring Waggle to your classroom today!
        </p>
      </div>

      <div className='background'>
        <h3>Some Background...</h3>
        <p>
          Where did we get our name? Waggle is a term that refers to a special
          "dance" done by bees! The waggle dance serves an important purpose for
          a colony of bees. The dance is performed by a bee to show its fellow
          bees where to find nectar. Likewise, in Waggle, our users are the
          waggling bees who lead their peers to the nectar of knowledge they've
          discovered.
        </p>
      </div>
      <div className='comingSoon'>
        <h3>Coming Soon</h3>
        <p>
          In future updates, we will be introducing gamification into Waggle.
          Wagglers will now be able to earn points, achievements, and badges for
          things like asking questions and sharing their insights. The reward
          system functions as positive reinforcement, helping further develop an
          instrinsic desire to collaborate.
        </p>
      </div>
    </div>
  </div>

    </div>
  
);

export default HomePage;

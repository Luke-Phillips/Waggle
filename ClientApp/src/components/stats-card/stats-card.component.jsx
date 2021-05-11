import React from 'react';
import PersonalStats from '../personal-stats/personal-stats.component';
import HiveStats from '../hive-stats/hive-stats.component';
import './stats-card.styles.scss';

const StatsCard = () => (
  // not sure if fetch call will be done here or be passed as props
  // for now, it's hardcoded
  /*props.user.role*/ 'student' == 'student' ? <PersonalStats /> : <HiveStats />
);

export default StatsCard;

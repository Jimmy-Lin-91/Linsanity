import React from 'react';
import ProgressBar from './ProgressBar.jsx';

const Stats = () => {
  return (
    <div className="accordion-stats" id="fade-in">
      <ProgressBar name={'CSS'} progress={80} color={'voilet'}/>
      <ProgressBar name={'JavaScript'} progress={65} color={'indigo'}/>
      <ProgressBar name={'React'} progress={76} color={'blue'}/>
      <ProgressBar name={'Express'} progress={25} color={'green'}/>
      <ProgressBar name={'MongoDB'} progress={45} color={'yellow'}/>
      <ProgressBar name={'PosgreSQL'} progress={45} color={'orange'}/>
      <ProgressBar name={'Humor'} progress={95} color={'red'}/>
    </div>
  )
}

export default Stats;
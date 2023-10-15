import React from 'react';

const SliderItem = ({ data }) => {
  const { time, company, job, tasks, skils } = data;

  return (
    <div className="slider-item">
      <p className='slider-p'>{time}</p>
      <p className='slider-p'>{company}</p>
      <p className='slider-p'>{job}</p>
      <ul className='slider-p'>{tasks.map((tasks, index)=>(
        <li key={index}>{tasks}</li>))}
      </ul>
      <ul className='slider-p'>{skils.map((skils, index)=>(
        <li key={index}>{skils}</li>
      ))}</ul>
    </div>
  );
};

export default SliderItem;
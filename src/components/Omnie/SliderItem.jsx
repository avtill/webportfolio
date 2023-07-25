import React from 'react';

const SliderItem = ({ data }) => {
  const { time, company, job, tasks, skils } = data;

  return (
    <div className="slider-item">
      <p className='slider-p'>{time}</p>
      <p className='slider-p'>{company}</p>
      <p className='slider-p'>{job}</p>
      <p className='slider-p'>{tasks}</p>
      <p className='slider-p'>{skils}</p>
    </div>
  );
};

export default SliderItem;
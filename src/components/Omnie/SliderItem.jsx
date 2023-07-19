import React from 'react';

const SliderItem = ({ data }) => {
  const { time, company, job, tasks, skils } = data;

  return (
    <div className="slider-item">
      <p>{time}</p>
      <p>{company}</p>
      <p>{job}</p>
      <p>{tasks}</p>
      <p>{skils}</p>
    </div>
  );
};

export default SliderItem;
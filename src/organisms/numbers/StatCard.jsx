import React, { useEffect, useState } from 'react';
import './statcard.scss';

const StatCard = ({ number, title, desc ,color}) => {
 
  
  return (
    <div className='num'>
        <h1 className={color}>{number}</h1>
        <h2>{title}</h2>
        <p>{desc}</p>
    </div>
  );
};

export default StatCard;
